import {deck} from '../index.js';

/**
 * @param {Array<string>} es un arreglo de string
 * @returns {String} retorna una carta del deck
 */

export const pedirCarta = () => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
