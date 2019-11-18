module.exports = function (plop) {
  plop.setHelper('upperCase', text => text.toUpperCase());
  // generators 
  plop.setGenerator('component', {
    description: 'Add component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name (ex. NameComponent):'
    },{
      type: 'input',
      name: 'path',
      message: 'Component path (ex. Shared/):'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{path}}{{name}}/styled.ts',
      templateFile: 'plop-templates/styled.ts.hbs'
    },{
      type: 'add',
      path: 'src/components/{{path}}{{name}}/{{name}}.tsx',
      templateFile: 'plop-templates/controller.tsx.hbs'
    }]
});
plop.setGenerator('page', {
    description: 'Add page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Page name (ex. PageName):'
    },{
      type: 'input',
      name: 'route',
      message: 'Route path (ex. /PageName):'
    },{
      type: 'confirm',
      name: 'header',
      message: 'Do you want add page to header navigation?'
    },{
      type: 'confirm',
      name: 'footer',
      message: 'Do you want add page to footer navigation?'
    }],
    actions: data => {
      const routeUpper = data.name.toUpperCase()
      const routeMenu = `${data.header && '"header"'} , ${data.footer && '"footer"'}`
      const routeObject = `{ name: "${data.name}", url: "${data.route}", menu: [${routeMenu}] }`
      const routeImpont = `export const ${routeUpper} = ${routeObject}`;

      const action = [
        {
          type: 'add',
          path: 'src/components/Pages/{{name}}/styled.ts',
          templateFile: 'plop-templates/styled.ts.hbs'
        },{
          type: 'add',
          path: 'src/components/Pages/{{name}}/{{name}}.tsx',
          templateFile: 'plop-templates/controller.tsx.hbs'
        }, {
          type: 'append',
          path: 'src/routes/routes.tsx',
          template: routeImpont
        }, {
          type: 'modify',
          path: 'src/App.tsx',
          pattern: /(\/\/ pages)/g,
          template: `$1\nimport {{name}} from './components/Pages/{{name}}/{{name}}'`,
        }, {
          type: 'modify',
          path: 'src/App.tsx',
          pattern: /(<Switch>)/g,
          template: '$1\n\            <Route path={ROUTES.{{upperCase name}}.url} component={ {{~name~}} }  />',
        }
      ]
      return action
    }
  });
};

