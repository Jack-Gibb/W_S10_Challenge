import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetOrderHistoryQuery } from '../state/orderApi';
import { setOrders, setFilter } from '../state/slice';

export default function OrderList() {
  const dispatch = useDispatch();
  const { data: orders, error, isLoading } = useGetOrderHistoryQuery();
  const filter = useSelector((state) => state.filter);
  const orderList = useSelector((state) => state.orders); 

  useEffect(() => {
    if (orders) {
      dispatch(setOrders(orders));
    }
  }, [orders, dispatch]);

  const filteredOrders = orderList.filter(
    (order) => filter === 'All' || order.size === filter
  );

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching orders: {error.message}</p>}
        {filteredOrders.map((order) => (
          <li key={order.id}>
            <div>
              <p>{order.customer} ordered a size {order.size} with {order.toppings ? `${order.toppings.length} toppings` : 'no toppings'}</p>
            </div>
          </li>
        ))}
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {['All', 'S', 'M', 'L'].map((size) => {
          const className = `button-filter${size === filter ? ' active' : ''}`;
          return (
            <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}
              onClick={() => dispatch(setFilter(size))}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
