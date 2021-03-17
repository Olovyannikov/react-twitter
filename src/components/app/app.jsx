import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.scss';
import styled from 'styled-components';
import {Component} from "react";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {

    state = {
        data: [
            {label: "Going to learn ReactJS", important: true, id: 1},
            {label: "That is so good", important: false, id: 2},
            {label: "I need a break...", important: false, id: 3},
        ]
    }

    maxId = 4;

    deleteItem = (id) => {
        this.setState(state => {
            const index = state.data.findIndex(elem => elem.id === id);

            const before = state.data.slice(0, index);
            const after = state.data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(state => {
            const newArr = [...state.data, newItem];

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList onDelete={this.deleteItem}
                          posts={this.state.data}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}