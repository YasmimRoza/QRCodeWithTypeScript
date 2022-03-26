import express from 'express' 
// import qrCode from './qrCode'
import qrCode from 'qrcode'
import fs from 'fs'

const app = express()

// yarn add qrcode -D
// yarn add @types/qrcode -D

let data = {
    name: "Yasmim Roza",
    age: 23,
    department: "Development",
    id: "sdf8s7fn32o3483297d"
}

let stringdata: string = JSON.stringify(data)

app.get('/console', (req, res) => {

    qrCode.toString(stringdata)
        .then(code => {
            console.log(code)
        })
        .catch(err => {
           console.log(err)
        })

    qrCode.toDataURL(stringdata, {
        color: {
            dark: '#ff0000',
            light: '#0000'
        },
        version: 10, scale: 10, margin: 6, width: 400, 
    },function(err, code){
        if (err) console.log('error' + err)
        return res.send("<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src='" + code + "'/></body></html>")
    })

    qrCode.toFile('src/path/chihiro.png', 'CHIHIRO', {
        color: {
            dark: '#ff0000',
            light: '#0000'
        }
    }, function (err) {
        if (err) throw err
        console.log('saved')
    })

    /**
     * qrCode.toCanvas(stringdata, function(err, code){
        if (err) throw err
        
        var container = document.getElementById('container')

        container.appendChild(code)
    })
     */

    // qrCode.toFileStream('src/path/chihiro.png', 'TESTE', )

    /** Retorna no console uma string
     *qrCode.toDataURL(stringdata, function(err, code) {
        console.log(code)
    }) 
     *
     */
})

app.listen(3000)