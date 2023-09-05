"use client";
import styles from './page.module.css'
import { useState, useEffect } from "react";

function ListItem(props) {
  const [edit, setEdit] = useState(props.edit);
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setEdit(props.edit);
  }, [props.edit])
  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  return(
    <li onClick={() => setEdit(true)}>
      {
        edit 
        ? <input name="list-input" type="text" value={value} />
        : value
      }
    </li>  
  )

}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>TODO List</h1>
      <ListItem value={"test"}/>
    </main>
  )
}
