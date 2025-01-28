import Bowerman from '../class/Bowerman';

test('correct', () => {
  const uno = new Bowerman('Bowman');
  const correct = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
}
    expect(uno).toEqual(correct);
});


