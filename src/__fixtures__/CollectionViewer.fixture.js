import React from 'react'
import { observer } from "mobx-react-lite";
import { CollectionViewer } from '../components/Collection'
import { useStore } from "../stores";
import { mock_book_and_meta } from './mocks'

export default function CollectionViewerFixture() {
  const { collectionsStore } = useStore();
  if(collectionsStore.size === 0) mocks.map( _m => collectionsStore.create(_m) )

  return <div>
    <p>CollectionViewer</p>
    <hr />
    <CollectionViewer collection={JSON.stringify(collectionsStore.findBy(['meta.description']), null, 4)} />
    
    <p>JSON.stringify(collectionsStore.all, null, 2)</p>
    <pre style={{backgroundColor: 'yellow'}}>
      {JSON.stringify(collectionsStore.all, null, 2)}
    </pre>
    
    <hr />
    
    <p>JSON.stringify(collectionsStore.asJS, null, 2)</p>
    <pre style={{backgroundColor: '#98ccf2'}}>
      {JSON.stringify(collectionsStore.asJS, null, 2)}
    </pre>
  </div>
 }



 