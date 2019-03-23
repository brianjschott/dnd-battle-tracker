import React from 'react';
import Timer from './Timer';

function BattleToolbar({
  initiative,
  round,
  secondsElapsed,
  combatants,
  nextButtonLabel,
  nextInitiative,
  resetBattle
}) {
  const buttonClass = 'battle-toolbar--button';
  const buttonClasses = combatants > 0 ? buttonClass : `${buttonClass} ${buttonClass}__disabled`;
  return (
    <div className="battle-toolbar">
      <button className={buttonClasses} onClick={nextInitiative}>{nextButtonLabel}</button>
      <div className="battle-toolbar--stat">
        Initiative:
        <div className="battle-toolbar--stat-value">{initiative}</div>
      </div>
      <div className="battle-toolbar--stat battle-toolbar--stat__extra2">
        Combatants:
        <div className="battle-toolbar--stat-value">{combatants}</div>
      </div>
      <div className="battle-toolbar--stat battle-toolbar--stat__extra1">
        Round:
        <div className="battle-toolbar--stat-value">{round}</div>
      </div>
      <div className="battle-toolbar--stat battle-toolbar--stat__extra2">
        Time Elapsed:
        <Timer startTime={secondsElapsed} className="battle-toolbar--stat-value" />
      </div>
      <button className={buttonClasses} onClick={resetBattle}>Reset</button>
    </div>
  );
}

export default BattleToolbar;