// Основной модуль
import gulp from 'gulp';

// импорт путей
import {path} from './gulp/config/path.js';

// передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
}

// импорт задач
import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js';

// Наблюдатель за изменениями в файле
function watcher(){
    gulp.watch(path.watch.files, copy)
}

//Построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher) // последовательность важна 

//выполнение задачи по умолчанию
gulp.task('default', dev);