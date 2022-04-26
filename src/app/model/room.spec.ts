import { Monster } from './monster';
import { Room } from './room';

describe('Room', () => {
  it('should create an instance', () => {
    expect(new Room(0,"",new Monster(0,"","",0,0,0,0,"",""))).toBeTruthy();
  });
});
