import "./FlatInfo.css"

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const FlatInfo = ({ flat, activeState }) => {

  const info = flat.attributes;
  return (
    <div className={activeState === ACTIVE_STATE.flat
      ? 'flat__info info info_active'
      : 'flat__info info'}>
      <h3 className='info__title'>Информация о квартире</h3>
      <p className="info__area">
        <b>Площадь:</b> {info.area} {info.unit}
        </p>
      <p className="info__rooms">
        <b>Количество комнат:</b> {info.rooms}
        </p>
      <div className="info__address address">
        <p className="address__item">
          <b>Город:</b> {info.address.city}
        </p>
        <p className="address__item">
          <b>Улица:</b> {info.address.street}
        </p>
        <p className="address__item">
          <b>Дом:</b> {info.address.house}
        </p>
        <p className="address__item">
          <b>Квартира:</b> {info.address.room}
        </p>
      </div>
      <p className="info__type">
        <b>Вид жилья:</b> {flat.type}
      </p>
    </div>
  )
}