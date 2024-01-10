/* eslint-disable no-unreachable-loop */
/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line import/no-extraneous-dependencies
import transition from 'react-element-popper/animations/transition'
import SelectSearch from 'react-select-search'
import 'react-select-search/style.css'
import InputRange from 'react-input-range'
import { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import { useDispatch } from 'react-redux'
import { useGetLanguagesSupportQuery } from '../../redux/services/ApiCall'
import 'react-input-range/lib/css/index.css'
import 'react-day-picker/dist/style.css'
import {
  CHANGE_SORT_VALUE,
  CHANGE_CERTIFICATION_VALUE,
  CHANGE_LANGUAGE_VALUE,
  CHANGE_VOTE_AVERAGE_VALUE,
  CHANGE_RUNTIME_VALUE,
  CHANGE_RELEASE_DATE_VALUE,
  CHANGE_KEYWORD_VALUE,
} from '../../redux/FilterSlice'

const SortOptions = [
  { name: 'popularity.asc', value: 'popularity.asc' },
  { name: 'popularity.desc', value: 'popularity.desc' },
  { name: 'revenue.asc', value: 'revenue.asc' },
  { name: 'revenue.desc', value: 'revenue.desc' },
  { name: 'primary_release_date.asc', value: 'primary_release_date.asc' },
  { name: 'primary_release_date.desc', value: 'primary_release_date.desc' },
  { name: 'vote_average.asc', value: 'vote_average.asc' },
  { name: 'vote_average.desc', value: 'vote_average.desc' },
  { name: 'vote_count.asc', value: 'vote_count.asc' },
  { name: 'vote_count.desc', value: 'vote_count.desc' },
]

const certificate = [0, 6, 12, 16, 18]

function Filter() {
  const dispatch = useDispatch()
  const [dateValue, setDateValue] = useState([new DateObject()])
  const [languageSelected, setLanguageSelected] = useState('none')
  const [runtimeRange, setruntimeRange] = useState({
    min: 120,
    max: 240,
  })
  const [voteAverage, setVoteAverage] = useState({
    min: 6,
    max: 8,
  })
  const { data: Languages } = useGetLanguagesSupportQuery()
  const RealLanguages = Languages?.filter((language) => language.name)
  const l = RealLanguages?.map((lang) => ({ name: lang.name, value: lang.iso_639_1 }))

  const handleSortBy = (value) => {
    dispatch({ type: CHANGE_SORT_VALUE, payload: value })
  }

  const handleChangeLanguage = (value) => {
    setLanguageSelected(value)
    dispatch({ type: CHANGE_LANGUAGE_VALUE, payload: value })
  }

  const handleChangeCertification = (e) => {
    const cert = e.target.innerText
    dispatch({ type: CHANGE_CERTIFICATION_VALUE, payload: cert })
  }

  const handleChangeReleaseDate = (value) => {
    const dates = value.map((date) => date.format('DD/MM/YYYY'))
    dispatch({ type: CHANGE_RELEASE_DATE_VALUE, payload: dates })
  }

  const handleChangeKeyword = (e) => {
    dispatch({ type: CHANGE_KEYWORD_VALUE, payload: e.target.value })
  }

  const certificateEl = certificate.map((c) => (
    <span
      key={c}
      onClick={(e) => handleChangeCertification(e)}
      className="px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-300 hover:text-gray-600 bg-gray-500 text-white">
      {c}
    </span>
  ))

  return (
    <div className="w-[20vw]">
      <div className="rounded-xl shadow-lg p-4">
        <div className="py-2">
          <h2 className="font-bold text-xl font-Catamaran">Sort By:</h2>
        </div>
        <div>
          <SelectSearch
            options={SortOptions}
            name="sort"
            onChange={handleSortBy}
            placeholder="Choose sort by"
            search
          />
        </div>
      </div>
      <div className="rounded-xl shadow-xl mt-8 p-8 flex flex-col gap-10">
        <div>
          <div className="py-2">
            <h2 className="font-bold text-xl font-Catamaran">Certification</h2>
          </div>
          <div className="flex gap-2 items-center">{certificateEl}</div>
        </div>
        <div>
          <div className="py-2">
            <h2 className="font-bold text-xl font-Catamaran">Language</h2>
          </div>
          <div className="w-[90%] mx-auto">
            {l && (
              <SelectSearch
                options={l}
                name="language"
                onChange={handleChangeLanguage}
                placeholder="Choose your Language"
                value={languageSelected}
                search
              />
            )}
          </div>
        </div>
        <div>
          <div className="pb-6">
            <h2 className="font-bold text-xl font-Catamaran">Vote Average</h2>
          </div>
          <div className="w-[90%] mx-auto">
            <InputRange
              draggableTrack
              maxValue={10}
              minValue={0}
              onChange={(value) => {
                setVoteAverage(value)
                dispatch({ type: CHANGE_VOTE_AVERAGE_VALUE, payload: value })
              }}
              onChangeComplete={(value) => console.log(value)}
              value={voteAverage}
            />
          </div>
        </div>
        <div>
          <div className="pb-6">
            <h2 className="font-bold text-xl font-Catamaran">Runtime</h2>
          </div>
          <div>
            <InputRange
              draggableTrack
              maxValue={360}
              minValue={0}
              formatLabel={(value) => `${value} min`}
              onChange={(value) => {
                dispatch({ type: CHANGE_RUNTIME_VALUE, payload: value })
                setruntimeRange(value)
              }}
              onChangeComplete={(value) => console.log(value)}
              value={runtimeRange}
            />
          </div>
        </div>
        <div>
          <div className="py-2">
            <h2 className="font-bold text-xl font-Catamaran">Release Date</h2>
          </div>
          <div>
            <div>
              <DatePicker
                value={dateValue}
                onChange={(value) => handleChangeReleaseDate(value)}
                range
                dateSeparator=" to "
                rangeHover
                animations={[transition()]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="py-2">
            <h2 className="font-bold text-xl font-Catamaran">Keyword</h2>
          </div>
          <div>
            <input
              type="text"
              id="keyword"
              onChange={(e) => handleChangeKeyword(e)}
              className="w-full h-[40px] border-2 p-2"
              placeholder="type keyword"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
