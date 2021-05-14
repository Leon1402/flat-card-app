import "./FlatInfo.css"

const ACTIVE_STATE = { flat: 'flat', owner: 'owner' }

export const FlatInfo = ({ flat, activeState }) => {

  const info = flat.attributes;
  return (
    <div className={activeState === ACTIVE_STATE.flat
      ? 'flat__info info flat__info_active'
      : 'flat__info info'}>
      Информация о квартире
      <div className="flat__area">Площадь: {info.area} {info.unit}</div>
      <div className="flat__rooms">Количество комнат: {info.rooms}</div>
      <div className="flat__address address">
        <div className="address__item">
          Город: {info.address.city}
        </div>
        <div className="address__item">
          Улица: {info.address.street}
        </div>
        <div className="address__item">
          Дом: {info.address.house}
        </div>
        <div className="address__item">
          Квартира: {info.address.room}
        </div>
      </div>
      <div className="flat__type">
        Вид жилья: {flat.type}
      </div>
    </div>
  )
}