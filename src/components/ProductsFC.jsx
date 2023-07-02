import React, { useState } from "react";
import { IconSwitch } from './Switcher';
import { CardsView } from './CardsViewFC';
import { ListView } from './ListViewFC';

export const Store = ({items}) => {
  const products = items;
  const initialState = { iconType: 'view_list' };
  const [state, setState] = useState(initialState);
  
  const onSwitchHandler = (event) => {
    if (event.target.textContent === 'view_list') {
      setState({
        ...state, iconType: 'view_module'
      })
    } else {
      setState({
        ...state, iconType: 'view_list'
      })
    }
  }
  
  const ManageView = ({view}) => {
    if (view === 'view_list') {
      return (
        <CardsView items={products} />
      )
    } else {
      return (
        <ListView items={products} />
      )
    }

  }

  return (
    <>
    <div className='block-switcher'>
      <IconSwitch icon={state.iconType} onSwitch={onSwitchHandler}/>
    </div>
    <div className='block-products'>
      <ManageView view={state.iconType}/>
    </div>
    </>
  )
}
