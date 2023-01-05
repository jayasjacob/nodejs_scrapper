const express = require('express')
const cheerio = require('cheerio')
const request = require('request-promise') //.defaults({proxy:"http://115.127.23.165:31066"})

const app = express()


app.get('/', async (req, res) => {
    const Scraped = []
 
    //const URL = req.query.url.split(',')
    const URLS = ["https://www.amazon.in/HTC-Desire-626G-Blue-Lagoon/dp/B00UFPHQKC/ref=sr_1_4?dchild=1&keywords=htc&qid=1602780220&sr=8-4","https://www.amazon.in/Vivo-Mystic-Storage-Additional-Exchange/dp/B08444XXKV/ref=sr_1_1_sspa?dchild=1&keywords=vivo&qid=1602831363&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUUpZWDBPUzlZVDhEJmVuY3J5cHRlZElkPUEwMTkwNDQ0MzJYV05BQUdKVzhRVCZlbmNyeXB0ZWRBZElkPUEwNzE0MDIxM0hZVkZWQjRWRE5CUiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=","https://www.amazon.in/HTC-One-X9-Smart-Carbon/dp/B01HXZDT7A/ref=sr_1_2?dchild=1&keywords=htc&qid=1602780220&sr=8-2"]
   // URL.forEach((el) => { console.log(el); URLS.push(el) })
    console.log(URLS)
    for (let url of URLS) {
        const Data = await request(url,{gzip:true})
     
        const $ = await cheerio.load(Data)
        let keyos = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)").text()
        let os = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)").text().trim()
        let key_ram = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(2) > th:nth-child(1)").text()
        let ram = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)").text().trim()
       let key_dimensions = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(3) > th:nth-child(1)").text()
       let dimensions = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2)").text().trim()
       
        let key_battery = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(4) > th:nth-child(1)").text()
        let batteries = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)").text().trim()
    let key_model = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(5) > th:nth-child(1)").text()
        let model = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2)").text().trim()
            let key_wireless = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(6) > th:nth-child(1)").text()
        let wireless_technologies = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2)").text().trim()
       let key_connectivity = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(7) > th:nth-child(1)").text()
        let connectivity = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(7) > td:nth-child(2)").text().trim()
        let key_specialFeatures = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(8) > th:nth-child(1)").text()
        let specialFeatures = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2)").text().trim()
        let key_display = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(9) > th:nth-child(1)").text()
        let display = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(9) > td:nth-child(2)").text()
        let key_other_features = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(10) > th:nth-child(1)").text()
        let other_features = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(10) > td:nth-child(2)").text()
        let key_resolution = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(11) > th:nth-child(1)").text()
        let resolution = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(11) > td:nth-child(2)").text()
        let key_other_Camera_features = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(12) > th:nth-child(1)").text()
        let other_camera_features = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(2)").text()
        let key_form_factor = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(13) > th:nth-child(1)").text()
        let form_factor = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(2)").text()
        let key_color = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(14) > th:nth-child(1)").text()
        let color = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)").text()
        let key_whats_in_box = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(16) > th:nth-child(1)").text()
        let whats_in_the_box = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(16) > td:nth-child(2)").text()
        let key_origin = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(18) > th:nth-child(1)").text()
        let origin = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(2)").text()
        let key_item_weight = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(19) > th:nth-child(1)").text()
        let item_weight = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(2)").text()
        let key_battery_rating = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(15) > th:nth-child(1)").text()
        let battery_rating = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(14) > td:nth-child(2)").text()
        let key_manufacturer = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(17) > th:nth-child(1)").text()
        let manufacturer = await $("#productDetails_techSpec_section_1 > tbody:nth-child(1) > tr:nth-child(17) > td:nth-child(2)").text()


        var obj = {}
        obj[keyos] = os,
        obj[key_ram] = ram
        obj[key_dimensions] = dimensions
        obj[key_battery] = batteries
        obj[key_model] = model
        obj[key_wireless] = wireless_technologies
        obj[key_connectivity] = connectivity
        obj[key_specialFeatures] = specialFeatures
        obj[key_display] = display
        obj[key_other_features] = other_features
        obj[key_resolution] = resolution
        obj[key_other_Camera_features] = other_camera_features
        obj[key_form_factor] = form_factor
        obj[key_color] = color
        obj[key_whats_in_box] = whats_in_the_box
        obj[key_origin] = origin
        obj[key_item_weight] = item_weight
        obj[key_battery_rating] = battery_rating
        obj[key_manufacturer] = manufacturer




        
        console.log(obj)
   
        Scraped.push(obj)
}
    res.status(200).json(Scraped)
    debugger;

})

app.listen(9000, () => {
    console.log(`listening to port 8000`)
})