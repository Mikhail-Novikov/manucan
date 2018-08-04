'use strict';

import paths from '../paths';
import pkg from '../../package';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import combiner from 'stream-combiner2';
import * as emitty from 'emitty';
import {bs} from './server';

const gp = gulpLoadPlugins();
const emittyPug = emitty.setup(paths.src, 'pug');

export default function html() {
  const development = process.env.NODE_ENV !== 'production';
  return combiner.obj([
    gulp.src(paths.html.src),
    gp.if(global.watch, emittyPug.stream(global.pugChangedFile)),
    gp.pug({
      locals: {
        pkg,
        development,
        paths
      }
    }),
    gp.prettify({indent_inner_html: true, indent_size: 2, unformatted: ['pre', 'code']}),
    gp.typograf({
      locale: ['ru', 'en-US'],
      htmlEntity: {type: 'default'},
      safeTags: [
        ['<\\?php', '\\?>'],
        ['<textarea>', '</textarea>']
      ]
    }),
    gp.debug({title: "Asset task 'html'"}),
    gulp.dest(paths.html.dest),
    bs.stream({once: true})
  ]).on('error', gp.notify.onError(function (err) {
    return {
      title: "Error task 'html'",
      message: err.message
    }
  }));
};
