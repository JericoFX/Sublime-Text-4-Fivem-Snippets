const snippets = {
  'CLIENT/GetPlayerData': {
    prefix: 'GetPlayerData',
    body: ['local ${1:variable} = QBCore.Functions.GetPlayerData()'],
    description: 'CLIENT/GetPlayerData',
  },
  'CLIENT/Get the coords of an entity': {
    prefix: 'GetCoords',
    body: [
      '-- Return the vector 4 and with x,y,z and w',
      'local ${1:variable} = QBCore.Functions.GetCoords(${2:entity})',
    ],
    description: 'CLIENT/Get the coordinates from an entity, returns a vector3',
  },
  'CLIENT/Add a new option in qb-radialmenu': {
    prefix: ['AddRadial', 'CreateRadialOption'],
    body: ['exports["qb-radialmenu"]:AddOption({--[[table here]]})'],
    description: 'Add a new option in qb-radialmenu',
  },
  'CLIENT/Floating text on the screen': {
    prefix: 'DrawText',
    body: [
      'QBCore.Functions.DrawText(${1:x}, ${2:y}, ${3:width}, ${4:height}, ${5:scale}, ${6:r}, ${7:g}, ${8:b}, ${9:alpha}, ${10:text})',
    ],
    description: 'CLIENT/DrawText',
  },
  'CLIENT/ Draw text on a 3D space': {
    prefix: 'DrawText3D',
    body: [
      'QBCore.Functions.DrawText3D(${1:x},${2:y},${3:z},${4:text})',
      '',
      '',
    ],
    description: 'CLIENT/DrawText3D Draw text on a 3D space',
  },
  'CLIENT/Draw Nui Text first argument is the text, the second one is the position, the last argument is optional':
    {
      prefix: ['DrawNuiText', 'dw', 'Draw', 'Text', 'Dtext'],
      body: ['exports["qb-core"]:DrawText(${1:text},${2:position}) '],
      description:
        'CLIENT/Draw Nui Text first argument is the text, the second one is the position, the last argument is optional',
    },
  'CLIENT/ Change DrawNuiText First argument is a string with text, second is optional':
    {
      prefix: ['ChangeNuiText', 'ct', 'ChangeText', 'Ctext'],
      body: ['exports["qb-core"]:ChangeText(${1:text},${2:position}) '],
      description:
        'CLIENT/ Change DrawNuiText First argument is a string with text, second is optional',
    },
  'CLIENT/ Hide TextHide NUI text': {
    prefix: ['HideText', 'ht', 'Hide', 'Htext'],
    body: ['exports["qb-core"]:HideText() '],
    description: 'CLIENT/ Hide TextHide NUI text',
  },
  'CLIENT/ KeyPressed Emulate a key press effect and hide the NUI Text': {
    prefix: ['KeyPressed', 'kp', 'Ktext'],
    body: ['exports["qb-core"]:KeyPressed() '],
    description:
      'CLIENT/ KeyPressed Emulate a key press effect and hide the NUI Text',
  },
  'CLIENT/USE PlayAnim it already load the animation before playing': {
    prefix: 'DrawText3D',
    body: ['QBCore.Functions.RequestAnimDict(${1:animationDict})', '', ''],
    description:
      'CLIENT/Request Animation Dictionary, USE PlayAnim it already load the animation before playing',
  },
  'CLIENT/Play Animation': {
    prefix: ['PlayAnim', 'PA'],
    body: [
      'QBCore.Functions.PlayAnim(${1:animDict}, ${2:animName}, ${3:upperBodyOnly}, ${4:duration})',
      '',
      '',
    ],
    description: 'CLIENT/Play Animation',
  },
  'CLIENT/Load a Model into memory': {
    prefix: 'LoadModel',
    body: ['QBCore.Functions.LoadModel(${1:model})'],
    description: 'CLIENT/Load a Model into memory',
  },
  'CLIENT/Send a Nofitication from the client': {
    prefix: 'Notify',
    body: ['QBCore.Functions.Notify(${1:Text}, "primary", ${3:length})'],
    description: 'CLIENT/Send a Nofitication from the client',
  },
  'CLIENT/This print on the server console the table or value you pass (you need to open svgui)':
    {
      prefix: ['Debug'],
      body: ['QBCore.Debug(${1:jsonobject})'],
      description: 'CLIENT/Debug Print in server console a table or value',
    },
  'CLIENT/Trigger a server event with a return of a value': {
    prefix: ['TriggerCallback', 'TC'],
    body: [
      'QBCore.Functions.TriggerCallback(${1:name},function(${2:returnValue})',
      '',
      'end,${3:Datasend})',
    ],
    description: 'CLIENT/Trigger a server event with a return of a value',
  },
  'CLIENT/ Box Zone, Create a PolyZone Box': {
    prefix: ['Boxzone', 'Box', 'PolyBox'],
    body: [
      'local ${1:Name}= BoxZone:Create(${2:Vector3}, ${3:W}, ${4:H}, {',
      '    name=${5:name},',
      '    debugPoly=false,',
      '})',
      '${1:Name}:onPlayerInOut(function(isPointInside, point)',
      'end)',
    ],
    description: 'CLIENT/ Box Zone, Create a PolyZone Box',
  },
  'CLIENT/ Get all vehicles from client': {
    prefix: 'GetVehicles',
    body: ['QBCore.Functions.GetVehicles()'],
    description: 'CLIENT/GetVehicles Get all vehicles from client',
  },
  'CLIENT/GetObjects': {
    prefix: 'GetObjects',
    body: ['QBCore.Functions.GetObjects()'],
    description: 'CLIENT/GetObjects',
  },
  'CLIENT/Return the closest player and distance': {
    prefix: ['GetClosestPlayer', 'gcp'],
    body: [
      'local ${1:player}, ${2:distance} = QBCore.Functions.GetClosestPlayer()',
    ],
    description: 'CLIENT/GetClosestPlayer',
  },
  'CLIENT/ This return a table with the player source.': {
    prefix: ['GetPlayersFromCoords', 'gpfc'],
    body: [
      'local ${1:ClosestPlayers}= QBCore.Functions.GetPlayersFromCoords(${2:coords},${3:distance})',
    ],
    description:
      'CLIENT/GetPlayersFromCoords This return a table with the player source.',
  },
  'CLIENT/ return closest vehicle and the distance, argument coords is optional':
    {
      prefix: ['GetClosestVehicle', 'gcv'],
      body: [
        'local closeVeh,closeDist = QBCore.Functions.GetClosestVehicle(${1:coords})',
      ],
      description:
        'CLIENT/GetClosestVehicle return closest vehicle and the distance, argument coords is optional',
    },
  'CLIENT/ return closest Object and the distance, argument coords is optional':
    {
      prefix: 'GetClosestObject',
      body: [
        'local closeObj,closeDist = QBCore.Functions.GetClosestObject(${1:coords})',
      ],
      description:
        'CLIENT/GetClosestObject return closest Object and the distance, argument coords is optional',
    },
  'CLIENT/pass an entity and a list of bones and return the most closest to the player':
    {
      prefix: 'GetClosestBone',
      body: [
        'local bone,coords,distance = QBCore.Functions.GetClosestBone(${1:entity},${2:list})',
      ],
      description:
        'CLIENT/GetClosestBone pass an entity and a list of bones and return the most closest to the player',
    },
  'CLIENT/ Spawn a vehicle from Server side': {
    prefix: 'SpawnVehicle',
    body: [
      "QBCore.Functions.TriggerCallback('QBCore:Server:SpawnVehicle', function(netId)",
      '     local veh = NetToVeh(netId)',
      "     TriggerEvent('vehiclekeys:client:SetOwner', QBCore.Functions.GetPlate(veh))",
      'end, ${1:VehicleModel}, ${2:Coordinates}, ${3:Warp})',
    ],
    description: 'CLIENT/ Spawn a vehicle from Server side',
  },
  'CLIENT/Delete a vehicle': {
    prefix: 'DeleteVehicle',
    body: ['QBCore.Functions.DeleteVehicle(${1:vehicle})'],
    description: 'CLIENT/DeleteVehicle Delete a vehicle',
  },
  'CLIENT/return the plate of the passed vehicle': {
    prefix: 'GetPlate',
    body: ['local plate = QBCore.Functions.GetPlate(${1:vehicle})'],
    description: 'CLIENT/GetPlate return the plate of the passed vehicle',
  },
  'CLIENT/return true or false if the coords are cleasr of others vehicles': {
    prefix: 'SpawnClear',
    body: [
      'local isClear = QBCore.Functions.SpawnClear(${1:coords},${2:radius})',
    ],
    description:
      'CLIENT/SpawnClear return true or false if the coords are cleasr of others vehicles',
  },
  'CLIENT/return all the properties of the passed vehicle or return null': {
    prefix: ['GetVehicleProperties', 'gvp'],
    body: ['local props = QBCore.Functions.GetVehicleProperties(${1:vehicle})'],
    description:
      'CLIENT/GetVehicleProperties return all the properties of the passed vehicle or return null',
  },
  'CLIENT/Set all the properties of a vehicle passed': {
    prefix: ['SetVehicleProperties', 'svp'],
    body: [
      'QBCore.Functions.SetVehicleProperties(${1:vehicle},${2:props})',
      '--Here you can use QBCore.Functions.SetVehicleProperties(vehicle,QBCore.Functions.GetVehicleProperties(vehicle))',
    ],
    description:
      'CLIENT/SetVehicleProperties Set all the properties of a vehicle passed',
  },
  'CLIENT/SERVER Get the QBCore object and all the functions': {
    prefix: ['GetCore', 'GC', 'GetObject'],
    body: ['local QBCore = exports["qb-core"]:GetCoreObject()'],
    description: 'CLIENT/SERVER Get the QBCore object and all the functions',
  },
  'SERVER/Get the coords of the entity passed, return a vector4(x,y,z,w) w is heading':
    {
      prefix: ['GetCoords', 'SGC'],
      body: ['local Coords = QBCore.Functions.GetCoords(${1:entity})'],
      description:
        'SERVER/Get the coords of the entity passed, return a vector4(x,y,z,w) w is heading',
    },
  'SERVER/Return the passed identifier or nil if nothing is found': {
    prefix: 'GetIdentifier',
    body: [
      'local idType = QBCore.Functions.GetIdentifier(${1:source},${2:idtype})',
      '',
    ],
    description:
      'SERVER/Return the passed identifier or nil if nothing is found',
  },
  'SERVER/Return the source of the passed identifier': {
    prefix: 'GetSource',
    body: ['local source = QBCore.Functions.GetSource(${1:identifier})', ''],
    description: 'SERVER/Return the source of the passed identifier',
  },
  'SERVER/Return all the data from the respective source': {
    prefix: 'GetPlayer',
    body: ['local Player = QBCore.Functions.GetPlayer(${1:source})', ''],
    description: 'SERVER/Return all the data from the respective source',
  },
  'SERVER/Return all the data from the respective citizenid': {
    prefix: 'GetPlayerByCitizenId',
    body: [
      'local Player = QBCore.Functions.GetPlayerByCitizenId(${1:citizenid})',
      '',
    ],
    description: 'SERVER/Return all the data from the respective citizenid',
  },
  'SERVER/Return all the data from the respective phone': {
    prefix: 'GetPlayerByPhone',
    body: [
      'local Player = QBCore.Functions.GetPlayerByPhone(${1:phoneNumber})',
      '',
    ],
    description: 'SERVER/Return all the data from the respective phone',
  },
  'SERVER/Return all players': {
    prefix: 'GetPlayers',
    body: ['local Players = QBCore.Functions.GetPlayers()', ''],
    description: 'SERVER/Return all players',
  },
  'SERVER/Return all the DATA from all players': {
    prefix: 'GetQBPlayers',
    body: ['local Players = QBCore.Functions.GetQBPlayers()', ''],
    description:
      'SERVER/Return all the DATA from all players this is not the same as GetPlayers, that only return the source',
  },
  'SERVER/Return an array players and the amount of players on duty for the selected job':
    {
      prefix: 'GetPlayersOnDuty',
      body: [
        'local players,count= QBCore.Functions.GetPlayersOnDuty(${1:job})',
        '',
      ],
      description:
        'SERVER/Return an array players and the amount of players on duty for the selected job',
    },
  'SERVER/Returns only the amount of players on duty for the specified job': {
    prefix: 'GetDutyCount',
    body: ['local count= QBCore.Functions.GetDutyCount(${1:job})', ''],
    description:
      'SERVER/Returns only the amount of players on duty for the specified job',
  },
  'SERVER/Returns the objects related to buckets, first returned value is the player buckets, second one is entity buckets':
    {
      prefix: 'GetBucketObjects',
      body: ['local count = QBCore.Functions.GetBucketObjects()', ''],
      description:
        'SERVER/Returns the objects related to buckets, first returned value is the player buckets, second one is entity buckets',
    },
  'SERVER/Will set the provided player id / source into the provided bucket id, return true if success or false':
    {
      prefix: 'GetBucketObjects',
      body: [
        'local count = QBCore.Functions.SetPlayerBucket(${1:source},${2:buket})',
        '',
      ],
      description:
        'SERVER/Will set the provided player id / source into the provided bucket id, return true if success or false',
    },
  'SERVER/Will set any entity into the provided bucket, for example peds / vehicles / props / etc.':
    {
      prefix: 'SetEntityBucket',
      body: [
        'local count = QBCore.Functions.SetEntityBucket(${1:entity},${2:buket})',
        '',
      ],
      description:
        'SERVER/Will set any entity into the provided bucket, for example peds / vehicles / props / etc.',
    },
  'SERVER/Will return an array of all the player ids inside the current bucket or false':
    {
      prefix: 'GetPlayersInBucket',
      body: [
        'local Current = QBCore.Functions.GetPlayersInBucket(${1:bucket})',
        '',
      ],
      description:
        'SERVER/Will return an array of all the player ids inside the current bucket or false',
    },
  'SERVER/Create a callback and return a value': {
    prefix: ['CreateCallback', 'CCallback'],
    body: [
      'QBCore.Functions.CreateCallback(${1:name},function(source,cb,${2:args}) ',
      '',
      'end)',
      '',
    ],
    description: 'SERVER/Create a callback and return a value',
  },
  'SERVER/Create a item': {
    prefix: 'CreateUseableItem',
    body: ['QBCore.Functions.CreateUseableItem(${1:item},cb)', ''],
    description: 'SERVER/Create a item',
  },
  'SERVER/Kick a player from the server': {
    prefix: 'Kick',
    body: [
      'QBCore.Functions.Kick(${1:source},${2:reason},${3:setKickReason},${4:deferrals})',
      '',
    ],
    description: 'SERVER/Kick a player from the server',
  },
  'SERVER/Add Permission for a player, always create the permission on the server.cfg':
    {
      prefix: 'AddPermission',
      body: ['QBCore.Functions.AddPermission(${1:source},${2:permission})'],
      description:
        'SERVER/Add Permission for a player, always create the permission on the server.cfg',
    },
  'SERVER/Inserts a new entry into the database and returns the insert id for the row, if valid.':
    {
      prefix: 'MySQL.insert',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/insert ',
        'MySQL.insert(${1:query},{${2:args}},function(cb) ',
        '',
        'end)',
      ],
      description:
        'SERVER/Inserts a new entry into the database and returns the insert id for the row, if valid.',
    },
  'SERVER/Inserts a new entry into the database and returns the insert id for the row, if valid. and wait for a promise':
    {
      prefix: 'MySQL.insert.await',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/insert ',
        ' local ${1:variable} = MySQL.insert.await(${2:query}, {${3:args}})',
      ],
      description:
        'SERVER/Inserts a new entry into the database and returns the insert id for the row, if valid. and wait for a promise',
    },
  'SERVER/Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.':
    {
      prefix: 'MySQL.prepare',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/prepare ',
        'MySQL.prepare(${1:query}, {${2:args}}, function(result)',
        '  ',
        'end)',
      ],
      description:
        'SERVER/Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.',
    },
  'SERVER/Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.This is the promise version':
    {
      prefix: 'MySQL.prepare.await',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/prepare ',
        'local ${1:variable} = MySQL.prepare.await(${2:query},{${3:args}})',
      ],
      description:
        'SERVER/Prepare can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.',
    },
  'SERVER/Generic function that can be utilised for any query.': {
    prefix: 'MySQL.query',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/query',
      'MySQL.query(${1:query}, {${2:args}}, function(result)',
      '',
      'end)',
    ],
    description: 'SERVER/Generic function that can be utilised for any query.',
  },
  'SERVER/Generic function that can be utilised for any query. Promise': {
    prefix: 'MySQL.query.await',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/query',
      'local ${1:variable} = MySQL.query.await(${1:query}, {{${2:args}})',
    ],
    description:
      'SERVER/Generic function that can be utilised for any query. Promise',
  },
  'SERVER/Returns the first column for a single row.': {
    prefix: 'MySQL.scalar',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/scalar',
      'MySQL.scalar(${1:query}, {${2:args}}, function(return)',
      '',
      'end)',
    ],
    description: 'SERVER/Returns the first column for a single row.',
  },
  'SERVER/Returns the first column for a single row.Promise': {
    prefix: 'MySQL.scalar.await',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/scalar',
      'local ${1:variable} = MySQL.scalar.await(${2:query}, {${3:args}})',
    ],
    description: 'SERVER/Returns the first column for a single row.Promise',
  },
  'SERVER/Returns the columns for a single row.': {
    prefix: 'MySQL.single',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/single',
      'MySQL.single(${1:query}, {${2:args}}, function(result)',
      '',
      'end)',
    ],
    description: 'SERVER/Returns the columns for a single row.',
  },
  'SERVER/Returns the columns for a single row. Promise': {
    prefix: 'MySQL.single.await',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/single',
      'local ${1:variable} = MySQL.single.await(${2:query}, {${3:args}})',
    ],
    description: 'SERVER/Returns the columns for a single row. Promise',
  },
  'SERVER/A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.':
    {
      prefix: 'MySQL.transaction',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/transaction',
        'local ${1:queries} = {',
        '  {query = "",values = {} }',
        '}',
        'MySQL.transaction(${1:queries}, function(result)',
        'end)',
      ],
      description:
        'SERVER/A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.',
    },
  'SERVER/A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.Promise':
    {
      prefix: 'MySQL.transaction.await',
      body: [
        '--https://overextended.github.io/docs/oxmysql/Usage/transaction',
        'local ${1:queries} = {',
        '  {query = "",values = {} }',
        '}',
        'local result = MySQL.transaction.await(${1:queries})',
      ],
      description:
        'SERVER/A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.Promise',
    },
  'SERVER/Returns the number of affected rows by the query.': {
    prefix: 'MySQL.update',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/update',
      'MySQL.update(${1:query}, {${2:args}}, function(affectedRows)',
      '',
      'end)',
    ],
    description: 'SERVER/Returns the number of affected rows by the query.',
  },
  'SERVER/rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.':
    {
      prefix: 'mysql.raw.await',
      body: [
        'local ${1:variable}= MySQL.rawExecute.await(${2:query}, {${3:args}})',
      ],
      description:
        'SERVER/rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.',
    },
  'SERVER/rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.':
    {
      prefix: 'mysql.raw',
      body: [
        'MySQL.rawExecute(${1:query}, {${2:args}}, function(response)',
        '    print(json.encode(response, { indent = true, sort_keys = true }))',
        'end)',
      ],
      description:
        'SERVER/rawExecute can be used to execute frequently called queries faster and accepts multiple sets of parameters to be used with a single query.',
    },
  'SERVER/Returns the number of affected rows by the query.Promise': {
    prefix: 'MySQL.update.await',
    body: [
      '--https://overextended.github.io/docs/oxmysql/Usage/transaction',
      'local Promise = MySQL.update.await(${1:query}, {${2:args}})',
    ],
    description:
      'SERVER/Returns the number of affected rows by the query.Promise',
  },
  'CLIENT/SERVER Create a Thread': {
    prefix: 'CT',
    body: ['CreateThread(function() ', '', 'end)'],
    description: 'CLIENT/SERVER Create a Thread',
  },
  'CLIENT/ Register a Key event, Command: is the name of the command, Definition: is the description, Type: This can be, mouse, keyboard, and the Button: is the key to press to fire the event':
    {
      prefix: ['KeyMapping', 'km'],
      body: [
        '--https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/',
        "RegisterCommand('+${1:command}', function()",
        '',
        'end, false)',
        "RegisterCommand('-${1:command}', function()",
        '',
        'end, false)',
        "RegisterKeyMapping('+${1:command}', '${2:definition}', '${3:type}', '${4:button}')",
      ],
      description:
        'CLIENT/ Register a Key event, Command: is the name of the command, Definition: is the description, Type: This can be, mouse, keyboard, and the Button: is the key to press to fire the event',
    },
  'CLIENT/ Print in the console a message': {
    prefix: 'log',
    body: [
      'function log(text)',
      'print(json.encode(text, { pretty = true, indent = "  ", align_keys = true }))',
      'end',
    ],
    description: 'CLIENT/ Print in the console a message',
  },
  'CLIENT/ Function to create a blip, pass the coordinates and a text': {
    prefix: 'Blip',
    body: [
      'local function addBlip(coords, text)',
      'local blip = AddBlipForCoord(coords.x, coords.y, coords.z)',
      'SetBlipSprite(blip, 535)',
      'SetBlipColour(blip, 1)',
      'SetBlipDisplay(blip, 4)',
      'SetBlipAlpha(blip, 250)',
      'SetBlipScale(blip, 0.8)',
      'SetBlipAsShortRange(blip, false)',
      'PulseBlip(blip)',
      'BeginTextCommandSetBlipName("STRING")',
      'AddTextComponentString(text)',
      'EndTextCommandSetBlipName(blip)',
      'return blip',
      'end',
    ],
    description:
      'CLIENT/ Function to create a blip, pass the coordinates and a text',
  },
  'CLIENT/ Register an Event': {
    prefix: 'NetEvent',
    body: ['RegisterNetEvent(${1:name},function(args) ', '', 'end)'],
    description: 'CLIENT/ Register an Event',
  },
  'SERVER/ Register an Event on the server': {
    prefix: 'ServerEvent',
    body: ['RegisterServerEvent(${1:name},function(args) ', '', 'end)'],
    description: 'SERVER/ Register an Event on the server',
  },
  'CLIENT: OnPlayerLoaded': {
    prefix: ['OnPlayerLoaded', 'OPL', 'opl'],
    body: [
      "RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()",
      '',
      'end)',
      '',
    ],
    description: 'OnPlayerLoaded',
  },
  'CLIENT: OnJobUpdate': {
    prefix: ['OnJobUpdate', 'OJU', 'oju'],
    body: [
      "RegisterNetEvent('QBCore:Client:OnJobUpdate', function(job)",
      '',
      'end)',
    ],
    description: 'On Job Update Event',
  },
  'SERVER/CLIENT Register a command': {
    prefix: 'Command',
    body: ['RegisterCommand(${1:name},function(source,args) ', '', 'end)'],
    description: 'SERVER/CLIENT Register a command',
  },
  'CLIENT/Open QB-Menu': {
    prefix: ['Menu', 'CreateMenu'],
    body: [
      'local MenuData = {',
      '        {',
      '            header = "${1:HeaderTitle}",',
      '            isMenuHeader = true, ',
      '        },',
      '        {',
      '            header = "Sub Menu Button",',
      '            txt = "This goes to a sub menu",',
      '            params = {',
      '                event = ',
      '                args = {',
      '                    number = 1,',
      '                }',
      '            }',
      '        },',
      '    }',
      'exports.qb-menu:openMenu(MenuData)',
    ],
    description: 'CLIENT/Open Create a new Menu',
  },
  'CLIENT/RegisterKeyMapping': {
    prefix: 'KeyMapping',
    body: [
      "RegisterCommand('+${1:CommandName}', function()",
      'end, false)',
      '',
      "RegisterCommand('-${1:CommandName}', function()",
      'end, false)',
      '',
      "RegisterKeyMapping('+${1:CommandName}', '${2:Description}', '${3:type}', '${4:KeyToPress}')",
    ],
    description: 'CLIENT/RegisterKeyMapping',
  },
  'CLIENT/ Create a Circle Zone, ': {
    prefix: ['CircleZone', 'CZ', 'CreateCircle', 'PolyCircle', 'CPoly'],
    body: [
      'local ${1:variable} = CircleZone:Create(${2:vector3}, ${3:radius}, {',
      '    name=${4:name},',
      '    debugPoly=false,',
      '})',
      '',
      '${1:variable}:onPlayerInOut(function(isPointInside, point)',
      '',
      'end)',
    ],
    description: 'CLIENT/ Create a Circle Zone, ',
  },
  'CLIENT/ Create a Entity Zone, ': {
    prefix: ['EntityZone', 'PEZone'],
    body: [
      '--https://github.com/mkafrin/PolyZone/wiki/EntityZone',
      '',
      'local ${1:variable} = EntityZone:Create(${2:entity}, {',
      '    name=${3:name},',
      '    debugPoly=false,',
      '})',
      '${1:variable}:onEntityDamaged(function(entityDied, attacker, weaponHash, isMelee)',
      '    -- Do stuff here!',
      '    -- You could destroy the zone when the entity is destroyed for example:',
      '  --  if entityDied then entity_zone:destroy() end',
      'end)',
    ],
    description: 'CLIENT/ Create a Entity Zone, ',
  },
  'CLIENT/ Delete a PolyZone': {
    prefix: ['PolyDestroy', 'Dpoly', 'Polyd'],
    body: ['${1:zoneName}:destroy()'],
    description: 'CLIENT/ Delete a PolyZone',
  },
  'CLIENT/ Set Player Appearance': {
    prefix: ['setPlayerAppearance', 'APSSet'],
    body: [
      'exports["fivem-appearance"]:setPlayerAppearance(--[[/appareance/]])',
    ],
    description: 'CLIENT/ Set Player Appearance',
  },
  'CLIENT/ Set Player Model': {
    prefix: ['setPlayerModel', 'APSModel'],
    body: [
      'exports["fivem-appearance"]:setPlayerModel(--[[mp_m_freemode_01]])',
    ],
    description: 'CLIENT/ Set Player Model',
  },
  'CLIENT/ Set Player Tattoos': {
    prefix: ['setPedTattoos', 'APSTattoos'],
    body: ['exports["fivem-appearance"]:setPedTattoos(--[[ped,{}]])'],
    description: 'CLIENT/ Set Player Tattoos',
  },
  'CLIENT/ Get Player Components': {
    prefix: ['getPedComponents', 'APGComp'],
    body: ['exports["fivem-appearance"]:getPedComponents(--[[PlayerPedId()]])'],
    description: 'CLIENT/ Get Player Components',
  },
  'SERVER/ Use Item': {
    prefix: ['useitem', 'Iuse'],
    body: ["exports['qb-inventory']:UseItem(--[[source, item]])"],
    description: 'SERVER/ Use Item',
  },
  'SERVER/CLIENT Check if the player has item or Items': {
    prefix: ['hasitem', 'Ihas'],
    body: ["exports['qb-inventory']:HasItem(--[[source, items, amount]])"],
    description: 'SERVER/ Check if the player has an item',
  },
  'SERVER/ Check if the player can use X item': {
    prefix: ['GetUsableItem', 'IGusable'],
    body: ["exports['qb-inventory']:GetUsableItem(--[[itemName]])"],
    description: 'SERVER/ Check if the player can use X item',
  },
  'SERVER/ Add an item to the inventory of the player': {
    prefix: ['AddItem', 'Iadd'],
    body: [
      "exports['qb-inventory']:AddItem(--[[source,item,amount?,slot?,info?]])",
    ],
    description: 'SERVER/ Add an item to the inventory of the player',
  },
  'SERVER/ Remove an item from the inventory of the player': {
    prefix: ['RemoveItem', 'Iremove'],
    body: [
      "exports['qb-inventory']:RemoveItem(--[[source, item, amount?, slot?]])",
    ],
    description: 'SERVER/ Remove an item from the inventory of the player',
  },
  'SERVER/ Get the item from the inventory of the player with the provided source by the name of the item':
    {
      prefix: ['GetItemByName', 'IGname'],
      body: ["exports['qb-inventory']:GetItemByName(--[[source, item]])"],
      description:
        'SERVER/ Get the item from the inventory of the player with the provided source by the name of the item',
    },
  'SERVER/ Get the item from the inventory of the player with the provided source by the name of the item in an array for all slots that the item is in':
    {
      prefix: 'GetItemsByName',
      body: ["exports['qb-inventory']:GetItemsByName(--[[source, item]])"],
      description:
        'SERVER/ Get the item from the inventory of the player with the provided source by the name of the item in an array for all slots that the item is in',
    },
  'CLIENT/ Create a PS:PolyZone': {
    prefix: ['PSPoly', 'PSPzone'],
    body: [
      'exports["ps-zones"]:CreatePolyZone("${name:requeried}", points --[[,data is optional]])',
    ],
    description: 'CLIENT/ Create a PS:PolyZone',
  },
  'CLIENT/ Create a PS:BoxZone': {
    prefix: 'PSbox',
    body: [
      'exports["ps-zones"]:CreateBoxZone("${name:requeried}", vector3(${2:x},${3:y},${4:z}), ${5:length}, ${56:width}--[[,data is optional]])',
    ],
    description: 'CLIENT/ Create a PS:BoxZone',
  },
  'CLIENT/ Create a PS:CircleZone': {
    prefix: 'PSCircle',
    body: [
      'exports["ps-zones"]:CreateCircleZone("${name:requeried}", vector3(${2:x},${3:y},${4:z}), ${5:radius} --[[,data optional]])',
    ],
    description: 'CLIENT/ Create a PS:CircleZone',
  },
  'CLIENT/ Create a PS:Entity Zone': {
    prefix: 'PSEntity',
    body: [
      'exports["ps-zones"]:CreateEntityZone("${name:requeried}", ${2:entity} --[[,data optional]])',
    ],
    description: 'CLIENT/ Create a PS:Entity Zone',
  },
  'CLIENT/ Destroy a zone, need to pass a name': {
    prefix: 'PSDestroy',
    body: ['exports["ps-zones"]:DestroyZone("${name:requeried}")'],
    description: 'CLIENT/ Destroy a zone, need to pass a name',
  },
  'CLIENT/SERVER Handler for PS Zone': {
    prefix: ['PShandler', 'PSEvent'],
    body: [
      'RegisterNetEvent("ps-zones:enter", function(ZoneName, ZoneData)',
      '    -- Code here',
      'end)',
      '',
      'RegisterNetEvent("ps-zones:leave", function(ZoneName, ZoneData)',
      '    -- Code here',
      'end)',
    ],
    description: 'CLIENT/ Handler for PS Zone',
  },
  'Create an alert dialog CLIENT': {
    prefix: 'oxalert',
    body: [
      '--@param header string',
      '--@param content string',
      '--@param centered boolean',
      '--@param cancel boolean',
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/alert',
      'local ${1:variable} = lib.alertDialog({',
      '    header = ${2:header},',
      '    content = ${3:content},',
      '    centered = ${4:center} ,',
      '    cancel = ${5:center} ,',
      '})',
    ],
    description: 'Create an alert dialog',
  },
  'Ox Register Context CLIENT': {
    prefix: 'oxrcon',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/context#libregistercontext',
      'lib.registerContext({',
      '  id = ${1:id},',
      '  title = ${2:title},',
      '  canClose = ${3:canClose},',
      '  options = {}',
      '})',
      'lib.showContext(${1:id})',
    ],
    description: 'Ox Register and Show a Context menu',
  },
  'Ox Show Context': {
    prefix: 'oxscon',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/context#libshowcontext',
      'lib.showContext(${1:id})',
    ],
    description: 'Ox Show Context',
  },
  'Ox Input Dialog': {
    prefix: 'oxidiag',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/input#libinputdialog',
      '--@param variable string',
      '--@param dialogTitle string',
      '--@param options table https://overextended.dev/ox_lib/Modules/Interface/Client/input#field-type-properties',
      '--@return table',
      'local ${1:variable} = lib.inputDialog(${2:dialogTitle}, {--[[options]]})',
    ],
    description: 'Ox Input Dialog',
  },
  'OX Register Menu': {
    prefix: 'oxrmenu',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/menu#libregistermenu',
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/menu#usage-example',
      'lib.registerMenu({',
      '  id = ${1:id},',
      '  title = ${2:title},',
      "  position = 'top-right',",
      '  options = {}',
      '})',
    ],
    description: 'OX Register Menu',
  },
  'OX Show Menu': {
    prefix: 'oxsmenu',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/menu#libshowmenu',
      'lib.showMenu(${1:id})',
    ],
    description: 'OX Show Menu',
  },
  'CLIENT/ OX Notification': {
    prefix: 'oxnoti',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify',
      'lib.notify({',
      '    title = ${1:title},',
      '    description = ${2:description},',
      "    type = 'success', --'inform' or 'error' or 'success'or 'warning'",
      '    duration = 3000',
      '})',
    ],
    description: 'CLIENT/ OX Notification',
  },
  'SERVER / OX Notification': {
    prefix: 'oxnoti',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/notify#libnotify',
      "TriggerClientEvent('ox_lib:notify', source, {",
      '    title = ${1:title},',
      '    description = ${2:description},',
      "    type = 'success', --'inform' or 'error' or 'success'or 'warning'",
      '    duration = 3000',
      '})',
    ],
    description: 'SERVER / OX Notification',
  },
  'CLIENT/ OX Square Progress Bar': {
    prefix: 'oxsbar',
    body: [
      'if lib.progressBar({',
      '    duration = 2000,',
      '    label = ${1:label},',
      '    useWhileDead = false,',
      '    canCancel = true,',
      '    disable = {',
      '        --car = true,',
      '    },',
      '    anim = {',
      "       -- dict = 'mp_player_intdrink',",
      "       -- clip = 'loop_bottle'",
      '    },',
      '    prop = {',
      '       -- model = `prop_ld_flow_bottle`,',
      '       -- pos = vec3(0.03, 0.03, 0.02),',
      '       -- rot = vec3(0.0, 0.0, -1.5)',
      '    },',
      '}) then ',
      "    print('Do stuff when complete') ",
      'else ',
      "    print('Do stuff when cancelled') ",
      'end',
    ],
    description: 'CLIENT/ OX Square Progress Bar',
  },
  'CLIENT/ OX Circle Progress Bar': {
    prefix: 'oxcbar',
    body: [
      'if lib.progressCircle({',
      '    duration = 2000,',
      "    position = 'bottom',",
      '    useWhileDead = false,',
      '    canCancel = true,',
      '    disable = {',
      '       -- car = true,',
      '    },',
      '    anim = {',
      "        --dict = 'mp_player_intdrink',",
      "        --clip = 'loop_bottle'",
      '    },',
      '    prop = {',
      '       --model = `prop_ld_flow_bottle`,',
      '       --pos = vec3(0.03, 0.03, 0.02),',
      '       --rot = vec3(0.0, 0.0, -1.5)',
      '    },',
      '}) then ',
      "    print('Do stuff when complete') ",
      'else ',
      "    print('Do stuff when cancelled') ",
      'end',
    ],
    description: 'CLIENT/ OX Circle Progress Bar',
  },
  'CLIENT/ OX Show TextUI': {
    prefix: 'oxsui',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/textui#libshowtextui',
      'lib.showTextUI(${1:text})',
    ],
    description: 'CLIENT/ OX Show TextUI',
  },
  'CLIENT/ OX Hide TextUI': {
    prefix: 'oxhui',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Interface/Client/textui#libshowtextui',
      'lib.hideTextUI()',
    ],
    description: 'CLIENT/ OX Hide TextUI',
  },
  'SERVER / OX Add command': {
    prefix: 'oxacomm',
    body: [
      '--https://overextended.dev/ox_lib/Modules/AddCommand/Server',
      'lib.addCommand(${1:commandName}, {',
      '    help = ${2:help},',
      '    params = {',
      '        --{',
      "           -- name = 'target',",
      "           -- type = 'playerId',",
      "          --  help = 'Target player\\'s server id',",
      '        --},',
      '    },',
      "    restricted = 'group.admin'",
      '}, function(source, args, raw)',
      '',
      'end)',
    ],
    description: 'SERVER / OX Add command',
  },
  'CLIENT / OX Add Key bind': {
    prefix: 'oxakey',
    body: [
      '--https://overextended.dev/ox_lib/Modules/AddKeybind/Client',
      'local ${1:variable} = lib.addKeybind({',
      '    name = ${2:name},',
      '    description = ${3:description},',
      '    defaultKey = ${4:key},',
      '    onPressed = function(self)',
      "       -- print(('pressed %s (%s)'):format(self.currentKey, self.name))",
      '    end,',
      '    onReleased = function(self)',
      "       -- print(('released %s (%s)'):format(self.currentKey, self.name))",
      '    end',
      '})',
      '--https://overextended.dev/ox_lib/Modules/AddKeybind/Client#enable--disable-keybinds',
      '--${1:variable}:disable(true) -- disables the keybind',
      '--${1:variable}:disable(false) -- enables the keybind',
    ],
    description: 'CLIENT / OX Add Key bind',
  },
  'CLIENT/ OX On Cache': {
    prefix: 'oxcache',
    body: [
      '--${1:key} =  ped or vehicle or seat or weapon',
      'lib.onCache(${1:key}, function(value)',
      'end)',
    ],
    description: 'CLIENT/ OX On Cache',
  },
  'CLIENT/ OX Callback': {
    prefix: 'oxcc',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#trigger-server-callback',
      'lib.callback(${1:event}, ${false:default}, function(ret)',
      '  ',
      'end)',
    ],
    description: 'CLIENT/ OX Callback',
  },
  'CLIENT/ OX Callback Await': {
    prefix: 'oxcca',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#libcallbackawait',
      'lib.callback.await(${1:name}, ${2:false:default}, ...)',
      '',
    ],
    description: 'CLIENT/ OX Callback Await',
  },
  'SERVER/ OX Callback Register': {
    prefix: 'oxscr',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#libcallbackawait',
      'lib.callback.register(${1:event}, function(source,...)',
      '--',
      'end)',
      '',
    ],
    description: 'SERVER/ OX Callback Register',
  },
  'SERVER/ OX Cron': {
    prefix: 'oxscron',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Cron/Server#cron-expression',
      'lib.cron.new(expression, job, options)',
      '',
    ],
    description: 'SERVER/ OX Cron',
  },
  'CLIENT/Opens an inventory using the passed data.': {
    prefix: 'oxopeninv',
    body: ['exports.ox_inventory:openInventory(${1:type}, ${2:data})'],
    description: 'CLIENT/Opens an inventory using the passed data.',
  },
  "CLIENT/If possible opens the nearby player's inventory.": {
    prefix: 'oxopennearinv',
    body: ['exports.ox_inventory:openNearbyInventory()'],
    description: "CLIENT/If possible opens the nearby player's inventory.",
  },
  "CLIENT/Closes the player's inventory.": {
    prefix: 'oxcloseinv',
    body: ['exports.ox_inventory:closeInventory()'],
    description: "CLIENT/Closes the player's inventory.",
  },
  'CLIENT/Returns a table of all registered items. The format is as defined in data/items.lua.':
    {
      prefix: 'oxinvitems',
      body: ['exports.ox_inventory:Items()'],
      description:
        'CLIENT/Returns a table of all registered items. The format is as defined in data/items.lua.',
    },
  'CLIENT/Uses the item in the given inventory slot.': {
    prefix: 'oxinvslot',
    body: ['exports.ox_inventory:useSlot(${1:slot})'],
    description: 'CLIENT/Uses the item in the given inventory slot.',
  },
  'CLIENT/Forces the secondary-inventory key to open the passed inventory. Can be useful to enable inventory access while standing inside a marker.':
    {
      prefix: 'oxinvsetstash',
      body: ['exports.ox_inventory:setStashTarget(${1:id}, ${2:owner})'],
      description:
        'CLIENT/Forces the secondary-inventory key to open the passed inventory. Can be useful to enable inventory access while standing inside a marker.',
    },
  'CLIENT/Get data for the currently equipped weapon.': {
    prefix: 'oxinvcurweapon',
    body: ['exports.ox_inventory:getCurrentWeapon()'],
    description: 'CLIENT/Get data for the currently equipped weapon.',
  },
  'CLIENT/Sets a metadata property to display in the tooltip.': {
    prefix: 'oxinvdmeta',
    body: ['exports.ox_inventory:displayMetadata(${1:metadata}, ${2:value})'],
    description: 'CLIENT/Sets a metadata property to display in the tooltip.',
  },
  'CLIENT/Searches the inventory for an item, or list of items, with the result varying based on the first argument.':
    {
      prefix: 'oxinvsearch',
      body: [
        'exports.ox_inventory:Search(${1:search}, ${2:item}, ${3:metadata})',
        "  -- search: 'slots' or 'count'",
        "  -- 'slots' returns a table of slots where the item was found at.",
        "  -- 'count' returns the count of the specified item in player's inventory. If searching for multiple items returns key-value pairs of itemName = count.",
        '  -- item: table or string',
        '  -- Can be a single item name or array of item names.',
        '  -- metadata?: table or string',
        "  -- If metadata is provided as a string it will search the item's metadata.type property.",
        '',
      ],
      description:
        'CLIENT/Searches the inventory for an item, or list of items, with the result varying based on the first argument.',
    },
  "CLIENT/Get the total item count for all items in the player's inventory with the given name and metadata.":
    {
      prefix: 'oxinvGetItemCount',
      body: [
        'exports.ox_inventory:GetItemCount(${1:itemName}, ${2:metadata}, ${3:strict})',
      ],
      description:
        "CLIENT/Get the total item count for all items in the player's inventory with the given name and metadata.",
    },
  'SERVER/Opens an inventory using the passed data. Forces a player to open an inventory, without usual security checks (groups, coords).':
    {
      prefix: 'oxforceOpenInventory',
      body: [
        '--https://overextended.dev/ox_inventory/Functions/Server#forceopeninventory',
        'exports.ox_inventory:forceOpenInventory(${1:playerId}, ${2:invType}, ${3:data})',
      ],
      description:
        'SERVER/Opens an inventory using the passed data. Forces a player to open an inventory, without usual security checks (groups, coords).',
    },
  'SERVER/Adds an item into the specified inventory.': {
    prefix: 'oxaddItem',
    body: [
      '--https://overextended.dev/ox_inventory/Functions/Server#additem',
      'exports.ox_inventory:AddItem(${1:inv}, ${2:item}, ${3:count}, ${4:metadata}, ${5:slot}, ${6:cb})',
    ],
    description: 'SERVER/Adds an item into the specified inventory.',
  },
  'SERVER/Removes the specified item from the specified inventory.': {
    prefix: 'oxremoveItem',
    body: [
      '--https://overextended.dev/ox_inventory/Functions/Server#RemoveItem',
      'exports.ox_inventory:RemoveItem(${1:inv}, ${2:item}, ${3:count}, ${4:metadata}, ${5:slot})',
    ],
    description:
      'SERVER/Removes the specified item from the specified inventory.',
  },
  'SERVER/Returns generic item data from the specified inventory, with the total count.':
    {
      prefix: 'oxgetitem',
      body: [
        '--https://overextended.dev/ox_inventory/Functions/Server#getitem',
        'exports.ox_inventory:GetItem(${1:inv}, ${2:item}, ${3:metadata}, ${4:returnsCount})',
      ],
      description:
        'SERVER/Returns generic item data from the specified inventory, with the total count.',
    },
  'SERVER/Returns true or false depending if the inventory can carry the specified item.':
    {
      prefix: 'oxcancarryitem',
      body: [
        '--https://overextended.dev/ox_inventory/Functions/Server#cancarryitem',
        'exports.ox_inventory:CanCarryItem(${1:inv}, ${2:item}, ${3:count}, ${4:metadata})',
      ],
      description:
        'SERVER/Returns true or false depending if the inventory can carry the specified item.',
    },
  'SERVER/Returns the amount a player can hold based on available weight.': {
    prefix: 'oxcancarryamount',
    body: [
      '--https://overextended.dev/ox_inventory/Functions/Server#cancarryamount',
      'exports.ox_inventory:CanCarryAmount(${1:inv}, ${2:item})',
    ],
    description:
      'SERVER/Returns the amount a player can hold based on available weight.',
  },
  'SERVER/Get the total item count for all items in an inventory with the given name and metadata.':
    {
      prefix: 'oxgetitemcount',
      body: [
        '--https://overextended.dev/ox_inventory/Functions/Server#getitemcount',
        'exports.ox_inventory:GetItemCount(${1:inv}, ${2:itemName}, ${3:metadata}, ${4:strict})',
      ],
      description:
        'SERVER/Get the total item count for all items in an inventory with the given name and metadata.',
    },
  'SERVER/Searches an inventory for a specified item.': {
    prefix: 'oxsearch',
    body: [
      '--https://overextended.dev/ox_inventory/Functions/Server#search',
      'exports.ox_inventory:Search(${1:inv}, ${2:search}, ${3:item}, ${4:metadata})',
    ],
    description: 'SERVER/Searches an inventory for a specified item.',
  },
  'SERVER/Creates a new custom stash.': {
    prefix: 'oxregisterstash',
    body: [
      '--https://overextended.dev/ox_inventory/Functions/Server#registerstash',
      'exports.ox_inventory:RegisterStash(${1:id}, ${2:label}, ${3:slots}, ${4:maxWeight}, ${5:owner}, ${6:groups}, ${7:coords})',
    ],
    description: 'SERVER/Creates a new custom stash.',
  },
  'Client/The response is handled in a separate coroutine.': {
    prefix: 'oxccallback',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#libcallback',
      'lib.callback(${1:name}, ${2:delay}, ${3:cb}, ...)',
    ],
    description: 'Client/The response is handled in a separate coroutine.',
  },
  'Client/The current coroutine is yielded until a response is received.': {
    prefix: 'oxccallbackawait',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#libcallbackawait',
      'lib.callback.await(${1:name}, ${2:delay}, ...)',
    ],
    description:
      'Client/The current coroutine is yielded until a response is received.',
  },
  'SERVER/Register an event handler for responding to server requests.': {
    prefix: 'oxcallbackregister',
    body: [
      '--https://overextended.dev/ox_lib/Modules/Callback/Lua/Client#libcallbackregister',
      'lib.callback.register(${1:name}, ${2:cb})',
    ],
    description:
      'SERVER/Register an event handler for responding to server requests.',
  },
};

function transformSnippetToSublimeText4(snippet) {
  const { prefix, body, description } = snippet;
  const content = body.join('\n');

  return `<snippet>
    <content><![CDATA[
${content}
    ]]></content>
    <tabTrigger>${prefix}</tabTrigger>
    <description>${description}</description>
	<scope>source.lua</scope>
</snippet>`;
}
const fs = require('fs');

for (const key in snippets) {
  if (snippets.hasOwnProperty(key)) {
    const snippet = snippets[key];
    const sublimeSnippet = transformSnippetToSublimeText4(snippet);
    const filename = `${snippet.prefix}.sublime-snippet`;

    fs.writeFile(filename, sublimeSnippet, (err) => {
      if (err) {
        console.error(`Error al escribir en el archivo ${filename}: ${err}`);
        return;
      }
      console.log(`Snippet convertido y guardado en ${filename}`);
    });
  }
}
