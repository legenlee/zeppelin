import { Latest } from './latest';
import { Version } from './version';

export class Manifest {
  public readonly latest: Latest;
  public readonly versions: Version[];
}
