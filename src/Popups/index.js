const councillorsPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-id-card" aria-hidden="true"></i><p class="title"> ${feature.properties.ward_name} Councillors</p>
  <p></p>
  <p class="info">${feature.properties.cllr_1} (${feature.properties.cllr_1_party})</p>
  <p class="info">${feature.properties.cllr_2} (${feature.properties.cllr_2_party})</p>
  <p class="info">${feature.properties.cllr_3} (${feature.properties.cllr_2_party})</p>
  
  </div>`
 
  layer.bindPopup(content)
 }
 export {
  councillorsPopup
}