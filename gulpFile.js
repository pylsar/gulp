// Основной модуль
import gulp from 'gulp';

// импорт путей
import {path} from './gulp/config/path.js';

//импорт плагинов
import {plugins} from './gulp/config/plugins.js';

// передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';

// Наблюдатель за изменениями в файле
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
};



const mainTasks = gulp.parallel(copy, html);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)) // последовательность важна 

//выполнение задачи по умолчанию
gulp.task('default', dev);