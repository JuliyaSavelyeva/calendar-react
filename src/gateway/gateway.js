const baseUrl = 'https://60f18ece38ecdf0017b0fd03.mockapi.io/api/v1/events';

export const getFetchData = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    return null;
  });

export const postFetchData = event =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then(response => {
    if (!response.ok) {
      throw new Error();
    }
  });

export const deleteFetchData = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error();
    }
  });
