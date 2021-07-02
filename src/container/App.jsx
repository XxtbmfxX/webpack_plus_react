import React, { useState, useEffect } from 'react'

import Header from "../components/Header";
import Search from '../components/Search';
import Categories from "../components/Categories";
import Carrusell from "../components/Carrusell";
import CarrusellItem from "../components/CarrusellItem";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialState";

import "../styles/App.scss";

const API = 'http://localhost:3000/initalState';

const App = () => {
    
    const initialState = useInitialState(API);
    // console.log(initialState);
    
    return initialState.length === 0 ? <h1>LOADING...</h1> : (
        <div className="App" >
            <Header />
            <Search />

            {initialState.mylist?.lenght > 0 && 
            
                <Categories title='Mi lista'>
                    <Carrusell>
                    {initialState.mylist?.map(item => 
                        <CarrusellItem key={item.id} {...item}/>
                    )}
                    </Carrusell>
                </Categories>
            
            }


            <Categories title='Tendencias'>
                <Carrusell>
                    {initialState.trends?.map(item => 
                        <CarrusellItem key={item.id} {...item}/>
                    )}
                </Carrusell>
            </Categories>

            <Categories title='Originals'>
                <Carrusell>
                    {initialState.originals?.map(item => 
                        <CarrusellItem key={item.id} {...item}/>
                    )}
                </Carrusell>
            </Categories>

            <Footer/>
        </div>
    )
}

export default App