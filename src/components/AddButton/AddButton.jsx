import style_addButton from './addButton.module.scss'
import icon_save from './assets/icon_save.svg'

export default function AddButton() {
  return (
    <button className='oncliсk'><img className='icon' src={icon_save} alt="save" /></button>
  )
}
