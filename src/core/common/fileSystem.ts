import { BadRequestException } from '../errors/badRequestException';
import { NotFoundException } from '../errors/notFoundException';
import { UnhandledException } from '../errors/unhandledException';
import fs from 'fs';

export class FileSystem {
  private static async _checkBeforeAction(path: fs.PathLike) {
    try {
      return await fs.promises.stat(path);
    } catch (error) {
      throw new NotFoundException('A file with you entered does not exists.');
    }
  }

  public static async readDirectory(path: fs.PathLike) {
    let info: fs.Stats;

    try {
      info = await this._checkBeforeAction(path);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new UnhandledException();
    }

    if (!info.isDirectory) {
      throw new BadRequestException(
        'A path you entered is exists but it is not a directory.'
      );
    }

    return await fs.promises.readdir(path);
  }

  public static async readFile(path: fs.PathLike) {
    let info: fs.Stats;

    try {
      info = await this._checkBeforeAction(path);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new UnhandledException();
    }

    if (!info.isFile) {
      throw new BadRequestException(
        'A path you entered is exists but it is not a file.'
      );
    }

    const readFileResult = await fs.promises.readFile(path);
    return readFileResult.toString();
  }

  public static async writeFile(path: fs.PathLike, data: string) {
    try {
      await fs.promises.writeFile(path, data);
    } catch (error) {
      throw new UnhandledException();
    }
  }

  public static async delete(path: fs.PathLike) {
    //
  }
}
