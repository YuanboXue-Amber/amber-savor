import * as React from 'react';
import CategoryList from '../component/CategoryList';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  const context = React.useContext(Context);
  const {loading, categoryList} = context;

  if (loading)
    return (<Loading />);

  return (
    <div>
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
