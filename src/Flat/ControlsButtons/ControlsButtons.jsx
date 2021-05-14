import "./ControlsButtons.css"

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const ControlsButtons = ({ setActiveState, activeState }) => {
  return (
    <div className='flat__buttons'>
      <button className = {activeState === ACTIVE_STATE.flat
      ? 'flat__button flat__button_active'
      : 'flat__button'}
        onClick={() => {
          setActiveState(ACTIVE_STATE.flat)
        }}>
        Информация о квартире
      </button>
      <button className = {activeState === ACTIVE_STATE.owner
      ? 'flat__button flat__button_active'
      : 'flat__button'}
        onClick={() => {
          setActiveState(ACTIVE_STATE.owner)
        }}>
        Информация об арендодателе
      </button>
    </ div>
  )
}