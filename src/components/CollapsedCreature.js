import React from 'react';
import HealthPoints from './HealthPoints';
import MonsterSearcher from './MonsterSearcher';

function commaSeparate(notes, trailing) {
  const suffix = trailing ? ',' : ''
  return notes.map((note) => {
    return `${note.text[0].toUpperCase()}${note.text.substring(1)}`;
  }).join(', ') + suffix;
}

function CollapsedCreature({creature, creatureExpander}) {
  const { name, rawName } = creature;
  const nameModifier = creature.alive ? '' : 'collapsed-creature--name__dead';
  const nameClasses = `collapsed-creature--name ${nameModifier}`
  const showConditions = creature.conditions.length > 0;
  const showNotes = creature.notes.length > 0;
  const showHealth = creature.healthPoints !== undefined;
  const conditionsMarginClass = showHealth ? 'collapsed-creature--status__margin' : '';
  const notesMarginClass = showHealth || showConditions ? 'collapsed-creature--status__margin' : '';
  return (
    <div className="collapsed-creature">
      <div className="creature-title">
        <h2 className={nameClasses}>
          {name}
        </h2>
        <MonsterSearcher search={rawName}/>
        {creatureExpander}
      </div>
      <div className="collapsed-creature--status">
        {showHealth && <HealthPoints
          short
          hp={creature.healthPoints}
          maxHp={creature.maxHealthPoints}
          className="collapsed-creature--health-points"
        />}
        {showConditions && 
          <div className={`collapsed-creature--notes ${conditionsMarginClass}`}>{
            commaSeparate(creature.conditions, showNotes)
          }</div>
        }
        {showNotes && 
          <div className={`collapsed-creature--notes ${notesMarginClass}`}>{
            commaSeparate(creature.notes, false)
          }</div>
        }
      </div>
    </div>
  );
}

export default CollapsedCreature;