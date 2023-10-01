const fse = require('fs-extra');

const dir_1 = 'dir_1';
const dir_2 = 'dir_2';
const dir_3 = 'dir_3';
const file = '/file.txt';

fse.ensureDirSync(dir_1);
fse.ensureFileSync(dir_1 + file);

fse.moveSync(dir_1 + file, dir_2 + file);
fse.copySync(dir_2 + file, dir_3 + file);

fse.removeSync(dir_2 + file);
fse.removeSync(dir_3 + file);

fse.removeSync(dir_1);
fse.removeSync(dir_2);
fse.removeSync(dir_3);








