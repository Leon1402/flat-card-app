import "./FlatOwner.css"

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const FlatOwner = ({ owner, activeState }) => {
  return (
    <div className={activeState === ACTIVE_STATE.owner
      ? 'flat__owner owner flat__owner_active'
      : 'flat__owner owner'}>
      Информация об арендодателе
        <div className="owner__type">Тип арендодателя: {owner.type}</div>
        <div className="owner__type">Тип арендодателя: {owner.type}</div>
        <div className="owner__type">
          ФИО: {`${owner.attributes.last_name} ${owner.attributes.first_name} ${owner.attributes.middle_name}`}
          </div>
      </div>
  )
}