import express from 'express' 
import qrCode from 'qrcode'
const app = express()
// yarn add qrcode -D
// yarn add @types/qrcode -D

let data = {
    name: "Yasmim Roza",
    age: 12,
    department: "Development",
    id: "sdf8s7fn32o3483297d"
}

let stringdata = JSON.stringify(data)

let link: string = `https://developer.mozilla.org/en-US/docs/Web/JavaScript`

app.get('/console', (req, res) => {

    qrCode.toString(stringdata)
        .then(code => {
            console.log(code)
        })
        .catch(err => {
           console.log(err)
        })

    qrCode.toDataURL(stringdata, { // return json
        color: {
            dark: '#ff0000',
            light: '#0000'
        },
        version: 10, scale: 10, margin: 6, width: 400,
    },function(err, code){
        if (err) console.log('error' + err)
        // return res.send("<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src='" + code + "'/></body></html>")
    })

    qrCode.toDataURL(link, {
        color: {
            dark: '#800000',
            light: '#0000'
        },
        version: 10, scale: 10, margin: 6, width: 400, type: 'image/jpeg'
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
})

app.listen(3000)