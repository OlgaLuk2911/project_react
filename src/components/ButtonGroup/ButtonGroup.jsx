import style_buttonGroup from './buttonGroup.module.scss'
import icon_delete from './assets/icon_delete.svg'
import icon_edit from './assets/icon_edit.svg'


export default function ButtonGroup() {
  return (
  <>
    <button className='oncliсk'><img className='icon' src={icon_edit} alt="edit" /></button>
    <button className='oncliсk'><img className='icon'  src={icon_delete} alt="delete" /></button>
  </>
  )
}
