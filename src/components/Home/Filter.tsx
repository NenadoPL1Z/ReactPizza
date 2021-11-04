import React, {FC, useEffect, useState} from 'react';
import {FormControl, Select, MenuItem, makeStyles} from "@material-ui/core";
import {requestGetApi} from "../../services/fetch";
import {ICategory} from "../../models/ICategory";
import {generateModification} from "../../utils/untils";
import {useTypeSelector} from "../../hook/useTypeSelector";
import {useDispatch} from "react-redux";
import {FilterType} from "../../store/reducers/filterReducer";
import {SortTypes} from "../../store/reducers/sortReducer";

const useStyle = makeStyles(() => ({
  filterSortedList: {
    '& > div': {
      borderBottom: '1px dashed rgba(254, 95, 30, 1)',
      color: '#FE5F1E',
      '& > div': {
        padding: '0 !important',
        backgroundColor: '#fff !important'
      },
    },
    '& > .MuiInput-underline:before, .MuiInput-underline:after': {
      display: 'none'
    }
  },
  selected: {
    backgroundColor: 'rgba(254, 95, 30, 0.05)',
    color: '#FE5F1E'
  },
  icon: {
    left: '-150px'
  }
}))



const Filter: FC = () => {
  const classes = useStyle();

  const [category, setCategory] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const dispatch = useDispatch()
  const sortValue = useTypeSelector(state => state.sortReducer)


  useEffect(() => {
    requestGetApi('./jsons/pizzaType.json')
      .then(r => {
        if (r) {
          setCategory(r as ICategory[])
        }
      })
  }, [])


  const handleClick = (item: ICategory) => {
    setActiveCategory(item.id)
    dispatch({type: FilterType.FILTER_CHANGE, payload: {type: item.type, name: item.name}})
  }

  const handleChange = (value: string | unknown) => {
    dispatch({type: SortTypes.CHANGE_SORT, payload: value})
  }


  return (
    <section className='filter'>
      <div className='filter__block'>
        {category.map((item) => {
          const active = 'filter__item--active'
          const notActive = 'filter__item--not-active'
          const modification = generateModification(item.id, activeCategory, active, notActive);

          return (
            <div
              key={item.id}
              className={`filter__item ${modification}`}
              onClick={() => handleClick(item)}
            >{item.name}
            </div>
          )
        })}
      </div>
      <div className='filter__sorted'>
        <div className='filter__sorted-title'><b>Сортировка по:</b> </div>
        <FormControl
          className={classes.filterSortedList}
        >
          <Select
            value={sortValue.value}
            onChange={(e) => handleChange(e.target.value)}
            classes={{icon: classes.icon}}
          >
            <MenuItem classes={{selected: classes.selected}} value={1}>популярности</MenuItem>
            <MenuItem classes={{selected: classes.selected}} value={2}>цене</MenuItem>
            <MenuItem classes={{selected: classes.selected}} value={3}>алфавиту</MenuItem>
          </Select>
        </FormControl>
      </div>
    </section>
  );
};

export default Filter;
