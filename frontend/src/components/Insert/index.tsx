import React, { useCallback, useState } from "react";
import Login from "../Login";
import SalesCard from "../SalesCard";
import {useForm } from 'react-hook-form'
import './styles.css';

function Insert(){

    const {register, handleSubmit } = useForm()
    const addPost = (data: any) => console.log(data)
   
    return(
        <div>
            <main>

                <div className="card-post">
                    <h1>CRIAR POSTAGEM</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post"></div>

                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="fields">
                            <label >Título</label>
                            <input type="text" id="title" {...register("title")} />
                        </div>
                        <div className="fields">
                            <label >Descrição</label>
                            <input type="text" id="description" {...register("description")}/>
                        </div>
                        <div className="fields">
                            <label >Conteúdo</label>
                            <textarea typeof="text" id="content" {...register("content")}></textarea>
                        </div>

                        <div className="btn-post">
                            <button type="submit">Enviar</button>
                        </div>

                    </form>

                </div>


            </main>



        </div>

    )
}

export default Insert;