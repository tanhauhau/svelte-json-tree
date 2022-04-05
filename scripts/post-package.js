import * as fs from 'fs';
import * as path from 'path';

const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), './package/package.json'), 'utf-8'));
delete pkg.type;

fs.writeFileSync(path.join(process.cwd(), './package/package.json'), JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
