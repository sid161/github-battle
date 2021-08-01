import React from 'react';

class BattleProgress extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
            <section className = "battle-section">
                <h2>Instructions</h2>
                <div className = "flex-30">
                    <h3>Enter 2 Github Users</h3>
                    <div className='flex center'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-people-fill'
                viewBox='0 0 16 16'
              >
                <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                <path
                  fillRule='evenodd'
                  d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
                />
                <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
              </svg>
            </div>
                </div>

                <div className='flex-30'>
            <h3>Battle</h3>
            <div className='flex center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-x-octagon-fill'
                viewBox='0 0 16 16'
              >
                <path d='M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z' />
              </svg>
            </div>
          </div>
          <h2>Players</h2>

  <div className='battle-div flex '>
  <div className='flex-50'>
    <h3>Player One</h3>
    <form
      action=''
      onSubmit={(event) => {
        this.props.handleAddUser(event, 'firstUser');
      }}
    >
      <input
        type='text'
        name='firstUser'
        id='firstUser'
        placeholder='firstUser'
      />
      <button
        className={this.props.firstUser ? 'active' : ''}
        type='submit'
      >
        Submit
      </button>
    </form>
    {this.props.firstUser ? (
              <div className='flex jsb battle-Home-card'>
                <div className='battle-Home-img-div'>
                  <img
                    src={this.props.firstUser.avatar_url}
                    alt='avatarUserOne'
                  />
                </div>
                <h4>{this.props.firstUser.name}</h4>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='flex-50'>
            <h3>Player Two</h3>
            <form
              action=''
              onSubmit={(event) => {
                this.props.handleAddUser(event, 'secondUser');
              }}
            >
              <input
                type='text'
                name='secondUser'
                id='secondUser'
                placeholder='second User'
              />
              <button
                className={this.props.secondUser ? 'active' : ''}
                type='submit'
              >
                Submit
              </button>
            </form>
            {this.props.secondUser ? (
              <div className='flex jsb battle-Home-card'>
                <div className='battle-Home-img-div'>
                  <img
                    src={this.props.secondUser.avatar_url}
                    alt='avatarUserOne'
                  />
                </div>
                <h4>{this.props.secondUser.name}</h4>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='battle-btn-div flex center'>
          {this.props.firstUser && this.props.secondUser ? (
            <button
              onClick={(event) => {
                this.props.handleBattle(
                  this.props.firstUser,
                  this.props.secondUser
                );
              }}
            >
              Battle
            </button>
          ) : (
            ''
          )}
          </div>

            </section>
            </>
        )
    }
}

export default BattleProgress