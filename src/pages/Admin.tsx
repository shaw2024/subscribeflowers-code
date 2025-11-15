import { useEffect, useState } from 'react'
import { getContacts, getSubscriptions, getOrders, deleteContact, deleteSubscription } from '../firebase/database'
import './Admin.css'

interface Contact {
  id: string
  name: string
  email: string
  message: string
  timestamp: any
}

interface Subscription {
  id: string
  name: string
  email: string
  phone?: string
  plan: string
  price: string
  timestamp: any
}

interface Order {
  id: string
  customerName: string
  customerEmail: string
  items: Array<{
    name: string
    price: number
    quantity: number
  }>
  total: number
  timestamp: any
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [activeTab, setActiveTab] = useState<'contacts' | 'subscriptions' | 'orders'>('contacts')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    const [contactsData, subscriptionsData, ordersData] = await Promise.all([
      getContacts(),
      getSubscriptions(),
      getOrders()
    ])
    setContacts(contactsData as Contact[])
    setSubscriptions(subscriptionsData as Subscription[])
    setOrders(ordersData as Order[])
    setLoading(false)
  }

  const handleDeleteContact = async (id: string) => {
    if (confirm('Delete this contact?')) {
      await deleteContact(id)
      loadData()
    }
  }

  const handleDeleteSubscription = async (id: string) => {
    if (confirm('Delete this subscription?')) {
      await deleteSubscription(id)
      loadData()
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A'
    return new Date(timestamp.seconds * 1000).toLocaleString()
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={loadData} className="refresh-btn">🔄 Refresh</button>
      </div>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'contacts' ? 'active' : ''} 
          onClick={() => setActiveTab('contacts')}
        >
          Contacts ({contacts.length})
        </button>
        <button 
          className={activeTab === 'subscriptions' ? 'active' : ''} 
          onClick={() => setActiveTab('subscriptions')}
        >
          Subscriptions ({subscriptions.length})
        </button>
        <button 
          className={activeTab === 'orders' ? 'active' : ''} 
          onClick={() => setActiveTab('orders')}
        >
          Orders ({orders.length})
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="admin-content">
          {activeTab === 'contacts' && (
            <div className="data-section">
              <h2>Contact Form Submissions</h2>
              {contacts.length === 0 ? (
                <p className="no-data">No contacts yet</p>
              ) : (
                <div className="data-table">
                  {contacts.map(contact => (
                    <div key={contact.id} className="data-card">
                      <div className="card-header">
                        <h3>{contact.name}</h3>
                        <button onClick={() => handleDeleteContact(contact.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                      <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                      <p><strong>Message:</strong> {contact.message}</p>
                      <p className="timestamp">{formatDate(contact.timestamp)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'subscriptions' && (
            <div className="data-section">
              <h2>Subscription Requests</h2>
              {subscriptions.length === 0 ? (
                <p className="no-data">No subscriptions yet</p>
              ) : (
                <div className="data-table">
                  {subscriptions.map(sub => (
                    <div key={sub.id} className="data-card">
                      <div className="card-header">
                        <h3>{sub.name}</h3>
                        <button onClick={() => handleDeleteSubscription(sub.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                      <p><strong>Email:</strong> <a href={`mailto:${sub.email}`}>{sub.email}</a></p>
                      {sub.phone && <p><strong>Phone:</strong> {sub.phone}</p>}
                      <p><strong>Plan:</strong> {sub.plan} - {sub.price}</p>
                      <p className="timestamp">{formatDate(sub.timestamp)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="data-section">
              <h2>Customer Orders</h2>
              {orders.length === 0 ? (
                <p className="no-data">No orders yet</p>
              ) : (
                <div className="data-table">
                  {orders.map(order => (
                    <div key={order.id} className="data-card">
                      <div className="card-header">
                        <h3>{order.customerName}</h3>
                        <span className="order-total">${order.total.toFixed(2)}</span>
                      </div>
                      <p><strong>Email:</strong> <a href={`mailto:${order.customerEmail}`}>{order.customerEmail}</a></p>
                      <div className="order-items">
                        <strong>Items:</strong>
                        <ul>
                          {order.items.map((item, idx) => (
                            <li key={idx}>
                              {item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="timestamp">{formatDate(order.timestamp)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Admin
