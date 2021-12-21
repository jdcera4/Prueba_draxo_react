import React from 'react';
import './style.css';
import {Image} from '../styled_components/people'
import people from '../images/people.png'
import { Button } from '../styled_components/boton'


function Main(){
    return (
              <main>
                  <section className="section-hero" >
                    <div className="container">
                      <div className="section-body">
                        <section className="section-inner">
                          <h2 className="section-title">Juan Muñoz</h2>
                          <p className="section-text">EXPERTO EN NEGOCIOS</p>
                        </section>
                      </div>
                      <div className="people">
                          <Image className="image" src={people}/>
                      </div>
                    </div>
                  </section>
                  <section id="about" className="section">
                    <div className="container">
                      <header className="section-header">
                        <h2 className="section-title">Sobre Mí</h2>
                      </header>
                      <div className="section-body">
                        <div className="row">
                          <div className="col-1-2">
                            <p>Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar Texto" o doble
                              clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto
                              donde quieras en tu página. En este espacio puedes contar tu historia y permitir a tus usuarios
                              saber más sobre ti.</p>
                          </div>
                          <div className="col-1-2">

                            <p>Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar Texto" o doble
                              clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto
                              donde quieras en tu página. En este espacio puedes contar tu historia y permitir a tus usuarios
                              saber más sobre ti.</p>
                          </div>
                        </div>
                      </div>
                      <div className="section-footer">
                        <Button className="button">Lee más sobre mi</Button>
                      </div>
                    </div>
                  </section>
            </main>
    )
}

export { Main };
