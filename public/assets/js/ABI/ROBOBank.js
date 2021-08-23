const ROBOBankABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_factory",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "AddAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_fundName",
				"type": "string"
			}
		],
		"name": "AddFundmanager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "AssetsInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "assetsAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_assetsId",
				"type": "uint256"
			}
		],
		"name": "AssetsStorages",
		"outputs": [
			{
				"internalType": "address",
				"name": "assetsAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "CheckAllowAssets",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_assetsAddress",
				"type": "address"
			}
		],
		"name": "DisableAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fundID",
				"type": "uint256"
			}
		],
		"name": "FundBalance",
		"outputs": [
			{
				"internalType": "address",
				"name": "fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "masterBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fundID",
				"type": "uint256"
			}
		],
		"name": "FundInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "fundAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "masterAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "fundName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "profitShareToManager",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "BUSDfee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "OwnerROBOBank",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalAssets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalFundmanager",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_msgSender",
				"type": "address"
			}
		],
		"name": "checkFactory",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_depositSender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isMaster",
				"type": "bool"
			}
		],
		"name": "depositFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factoryAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_factory",
				"type": "address"
			}
		],
		"name": "factoryChange",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "feeToo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUNISWAP_V2_ROUTER",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_fundAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_managerBalance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_BUSDfee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_profitShareToManager",
				"type": "uint256"
			}
		],
		"name": "setupFund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];