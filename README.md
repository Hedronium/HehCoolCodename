# Heh, Cool Codename.
> BRUH.

![CodeNames](https://i.imgur.com/39yt3Jn.gif)

We just really like naming our releases cool codenames like "DesertFox" or "AcrticJaguar" or "RushMonkey". So we decided to turn this into a tiny really lame npm module.

It's also super helpful to users when resources have a nice name to be called with by default. Good UX is sexy. (Which actually happens to be the real reason we built this.)

## Installation
Run one of these commands.
```BASH
npm install heh-cool-codename --save
```

or if you're using yarn (which you should be)

```BASH
yarn add heh-cool-codename
```


## Usage
It exports just one function. That takes one argument. A number. The same number returns the same codename. Pass in a random number or pass in a hash. Which ever you prefer.

> There are a total of **110^2** possible codenames.

```Javascript
import * as codename from 'heh-cool-codename';

codename(983456); // ['Solar', 'Crane']
```

Yes, it returns an Array. We don't know your usecase so we believe this is best. Besides turning it into a string is trivial.

```Javascript
// "LambdaRacoon"
codename(345665).join(''); 

// "lambda-racoon"
codename(345665)
	.map(name => name.toLowerCase())
    .join('-');
```


## CLI
Yeah, we threw that in for fun. Install globally for use.

Run it as is for a random codename.

```
heh-cool-codename
```

or pass in a seed number to get a specific codename.

```
heh-cool-codename 42
```
Output: `Desert Croc`