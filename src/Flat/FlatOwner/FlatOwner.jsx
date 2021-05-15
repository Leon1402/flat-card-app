import './FlatOwner.css'

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const FlatOwner = ({ owner, activeState }) => {
  return (
    <div className={activeState === ACTIVE_STATE.owner
      ? 'flat__owner owner flat__owner_active'
      : 'flat__owner owner'}>
      <h3 className='owner__title'>
        Информация об арендодателе
       </h3>
      <p className="owner__type">
        <b>Тип арендодателя:</b> {owner.type}
      </p>
      <p className="owner__type">
        <b>ФИО:</b> {`${owner.attributes.last_name} ${owner.attributes.first_name} ${owner.attributes.middle_name}`}
      </p>
    </div>
  )
}