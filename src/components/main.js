import React from 'react'
import { Header, TodoInput, TodoList } from "../components";
import style from '../app.module.css'

function main() {
    return (
        <>
            <div className={style.app}>
                <div className={style.wrapper}>
                    <Header />
                    <TodoInput />
                    <TodoList />
                </div>
            </div>
        </>
    )
}

export default main