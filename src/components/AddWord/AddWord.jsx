import AddButton from '../AddButton/AddButton'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import style_addWord from './addWord.module.scss'

export default function AddWord() {
  return (
    <div className={style_addWord.wrap}>
      <input type="text" placeholder='слово на английском'/>
      <input type="text" placeholder='транскрипция'/>
      <input type="text"  placeholder='перевод на русский'/>
      <div>
      <AddButton/>
      <ButtonGroup />        
      </div>
    </div>
  )
}
