import ButtonGroup from '../ButtonGroup/ButtonGroup'
import style_listOfWords from './ListOfWords.module.scss'

export default function ListOfWords({english,transcription,russian}) {
  return (
    <div className={style_listOfWords.wrap}>
        <p>{english}</p>
        <p>{transcription}</p>
        <p>{russian}</p>
        <div className={style_listOfWords.central_alignment}>
            <ButtonGroup/>
        </div>
    </div>
  )
}
