import * as domino from 'domino';
import { readFileSync } from 'fs';
import { join } from 'path';
import { environment } from 'src/environments/environment';

const template = readFileSync(join(process.cwd(), environment.distFolder, 'index.html'), 'utf-8');
const win = domino.createWindow(template) as typeof window;

(global as any).window = win;
(global as any).document = win.document;
(global as any).HTMLElement = win.HTMLElement;
