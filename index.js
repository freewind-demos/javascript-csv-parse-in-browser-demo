const csv = `
name,miao
age,6
`

const data = Papa.parse(csv.trim())

const myObj = {}

for (const line of data.data) {
    const key = line[0]
    const value = line[1]
    myObj[key] = value
}

document.getElementById('csv').innerText = csv
document.getElementById('json').innerText = JSON.stringify(myObj, null, 2)
