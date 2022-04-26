import { Monster } from './monster';

describe('Monster', () => {
  it('should create an instance', () => {
    expect(new Monster(0,"","",0,0,0,0,"","")).toBeTruthy();
  });
});
