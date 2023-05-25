// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from 'electron';
import { Expose } from './app/expose';

contextBridge.exposeInMainWorld(Expose.API_KEY, Expose.API_METHODS);
