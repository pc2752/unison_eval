import os
import json
import pandas as pd

tests = {
0 : ['normvshigh', ['norm', 'high']],
1 : ['highvsfull', ['high', 'full']],
2 : ['scsvsss', ['ss', 'scs']],
3 : ['scsvsscm', ['scm', 'scs']],
4 : ['scmvsss', ['scm', 'ss']],
5 : ['scsvsss', ['ss', 'scs']],
6 : ['scsvsss', ['scs', 'ss']],
7 : ['scsvsscm', ['scm', 'scs']],
8 : ['scsvsss', ['scs', 'ss']],
9 : ['scsvsss', ['ss', 'scs']],
10 : ['scmvsss', ['ss', 'scm']],
11 : ['scsvsscm', ['scm', 'scs']],
12 : ['scmvsss', ['ss', 'scm']],
13 : ['scsvsscm', ['scs', 'scm']],
14 : ['scmvsss', ['scm', 'ss']],

15 : ['ss', ['mask', 'ss']],
16 : ['scs', ['scs', 'mask']],
17 : ['scm', ['scm', 'mask']],
18 : ['scm', ['mask', 'scm']],
19 : ['ss', ['mask', 'ss']],
20 : ['scs', ['mask', 'scs']],
21 : ['ss', ['ss', 'mask']],
22 : ['scs', ['mask', 'scs']],
23 : ['scm', ['scm', 'mask']],
24 : ['scs', ['mask', 'scs']],
25 : ['ss', ['mask', 'ss']],
26 : ['scs', ['scs', 'mask']],
27 : ['scm', ['scm', 'mask']],
28 : ['ss', ['mask', 'ss']],
29 : ['scm', ['mask', 'scm']],

}

results = {"Intelligibility": {'scmvsss' : {'scm' :0, 'ss': 0, 'nopref': 0},
'scsvsss': {'scs': 0, 'ss': 0, 'nopref': 0},
'scsvsscm': {'scs': 0, 'scm': 0, 'nopref': 0}}
, "Source Separation": {'ss' : {'ss' :0, 'mask': 0, 'nopref': 0},
'scs': {'scs': 0, 'mask': 0, 'nopref': 0},
'scm': {'scm': 0, 'mask': 0, 'nopref': 0}}
, "Audio Quality": {'scmvmasks' : {'scm' :0, 'mask': 0, 'nopref': 0},
'scsvmasks': {'scs': 0, 'mask': 0, 'nopref': 0},
'scsvsscm': {'scs': 0, 'scm': 0, 'nopref': 0}}
}

files_to_use = [x for x in os.listdir('./results/') if not x.startswith('.')]
files_to_use = [x for x in files_to_use if int(x.split('-')[0])>20191010]

for file_name in files_to_use:
	with open(os.path.join('./results', file_name)) as the_file:
		data = json.loads(the_file.read())
	for datapoint in data:
		if 'preference' in datapoint.keys():
			identity = int(datapoint['TestID'].strip('id'))
			preference = datapoint['preference']

			if identity<15:
				test_name = "Intelligibility"
			elif identity<30:
				test_name = "Source Separation"
			else:
				test_name = "Audio Quality"
			test = tests[identity]
			if preference == 'A':
				preference = test[1][0]
			elif preference == 'B':
				preference = test[1][1]
			else:
				preference = 'nopref'
			results[test_name][test[0]][preference]+=1

data_intel = pd.DataFrame.from_dict(results['Intelligibility'])
data_ss = pd.DataFrame.from_dict(results['Source Separation'])
data_aq = pd.DataFrame.from_dict(results['Audio Quality'])

import pdb;pdb.set_trace()

# If you have 15 mins to spare can you do this listening test please: https://trompa-mtg.upf.edu/sep_content_eval/ , it would help a lot! 
# Si tienes 15 mins, puedes hacer este listening test? Me ayudas un monton