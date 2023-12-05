import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Items from './components/items.js';
import Catergories from './components/Catergories.js';
import ShowFullItem from './components/showFullItem.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'https://www.lavsit.ru/wp-content/uploads/2020/09/Lavsit_myagkiy_stul_s_podlokotnikami_sorvemenniy_dizayn.jpg',
          desc: 'Дизайнерский стул',
          category: 'chairs',
          price: '44.99'
        },
        {
          id: 2,
          title: 'Cтул',
          img: 'https://latqvbedpllwqek.skdesign.ru/wp-content/uploads/2022/02/211098_014_Miami_Chair_1_Jazz_Pastel_Blue--w_500.webp',
          desc: 'Дизайнерский стул для кухни',
          category: 'chairs',
          price: '24.99'
        },
        {
          id: 3,
          title: 'Стол',
          img: 'https://usadba-mebel.ru/images/detailed/9/Image00010.jpg',
          desc: 'Стол Муромец',
          category: 'tables',
          price: '144.99'
        },
        {
          id: 4,
          title: 'Диван',
          img: 'https://assets.thefurnish.ru/system/uploads/product_image/image/344101/CROSBY__SECTIONAL_1.jpg',
          desc: 'Угловой модульный диван',
          category: 'sofa',
          price: '249.99'
        },
        {
          id: 5,
          title: 'Стол',
          img: 'https://static.insales-cdn.com/images/products/1/905/221422473/1.jpg',
          desc: 'Письменный стол',
          category: 'tables',
          price: '349.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Catergories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  } 

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
