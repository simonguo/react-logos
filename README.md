#react-logos

## Example

```js
import React from 'react';
import { render } from 'react-dom';
import { Hypers, GuruDigital } from 'react-logos';

render((
    <div>
        <p>Hypers</p>
        <Hypers  width={90} color="#00c3ee" backgroundColor="transparent"/>
        <p>Guru Digital</p>
        <GuruDigital  width={90} color="#fff" backgroundColor="#00b12b"  />
    </div>
), document.getElementById('mount'));

```