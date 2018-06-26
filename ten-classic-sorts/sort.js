

class Sort {
	// 冒泡排序
	bubble(arr) {
		let len = arr.length,
			i = 0,
			j = 0;

		let count = 0;
		console.time("冒泡 正向");
		for (i = 0; i < len; i++) {
			for (j = 0; j < len - 1 - i; j++) {
				if (arr[j + 1] < arr[j]) {
					arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
				}
				count++;
			}
		}
		console.timeEnd("冒泡 正向");
		console.log(`时间复杂度 (n-1+1)*(n-1)/2=${count}`)
		return arr;
	}
	// 选择排序
	selection(arr) {
		let len = arr.length,
			i = 0,
			j = 0,
			min = i;
		let count = 0;
		console.time("A选择");
		for (i = 0; i < len - 1; i++) {
			min = i;
			for (j = i + 1; j < len; j++) {
				if (arr[j] < arr[min]) {
					min = j;
				}
				count++;
			}
			arr[i] = [arr[min], arr[min] = arr[i]][0];
		}
		console.timeEnd("A选择");
		console.log(count);
		return arr;
	}
	// 插入排序
	insertion(arr) {
		let len = arr.length,
			i = 0,
			j = 0,
			temp;

		// [7,6,2,5,4,3,1]

		for (i = 1; i < len; i++) {
			temp = arr[i];
			j = i - 1;
			while (j >= 0 && temp < arr[j]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = temp;
		}
		return arr;
	}
	// 希尔排序
	shell(arr) {
		let len = arr.length,
			i = 0,
			j = 0,
			temp,
			gap = 1;

		gap = len / 3 | 0;

		while (gap >= 1) {
			for (i = gap; i < len; i++) {
				temp = arr[i];
				j = i - gap;
				while (j >= 0 && temp < arr[j]) {
					arr[j + gap] = arr[j];
					j -= gap;
				}
				arr[j + gap] = temp;
			}
			gap = gap / 3 | 0;
		}

		return arr;
	}
	// 归并排序
	merge(arr) {
		return ({
			sortArr(leftArr, rightArr) {
				let res = [];
				// 合并
				while (leftArr.length * rightArr.length !== 0) {
					if (leftArr[0] < rightArr[0]) {
						res.push(leftArr.shift());
					} else {
						res.push(rightArr.shift());
					}
				}
				leftArr.length > 0 && (res = [...res, ...leftArr]);
				rightArr.length > 0 && (res = [...res, ...rightArr]);
				return res;
			},
			mergeArr(brr) {
				if (brr.length <= 1) return brr;
				let len = brr.length,
					left = [],
					right = [],
					middle;
				middle = len >> 1;
				// 分组
				left = brr.slice(0, middle);
				right = brr.slice(middle);
				return this.sortArr(this.mergeArr(left), this.mergeArr(right));
			}
		}).mergeArr(arr)
	}
	// 快速排序
	quick(arr) {
		if (arr.length <= 1) return arr;
		let len = arr.length,
			middle = len >> 1,
			pivot = (len--) && arr.splice(middle, 1)[0], // 取中间为基准数，并从数组中移除
			left = [],
			right = [],
			i = 0;

		for (i = 0; i < len; i++) {
			// 分组
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}
		return [...this.quick(left), pivot, ...this.quick(right)]; // 合并
	}
	// 堆排序
	heapSort(arr) {
		var n = arr.length,
			i, j;

		// 筛选
		var sift = (k, m, r) => {
			var p = k, // 父结点
				c = p * 2 + 1; // 左结点（默认最大）

			while (c <= m) { // 左结点(c=m)和左右结点(c<m)
				if (c < m && r[c + 1] > r[c]) c++; // 选出左右结点中的最大者，指向左结点
				if (r[p] > r[c]) break; // 父结点大于左结点 顺序正确，退出循环
				else {
					r[p] = [r[c], r[c] = r[p]][0]; // 将大的一方置于顶部（父结点）
					p = c; // 向下重新指向父结点
					c = p * 2 + 1; // 向下重新指向左结点
				}
			}
		};

		// 构建堆
		for (i = (n / 2 | 0) - 1; i >= 0; i--) { // 从最后一个分支结点开始向上逆序遍历 
			sift(i, n - 1, arr);
		}
		// 排序
		for (j = n - 1; j >= 0; j--) {
			arr[0] = [arr[j], arr[j] = arr[0]][0]; // 将最大的结点存于数组的最后一位
			n--; // 减少数组长度，排除有序序列
			sift(0, n - 1, arr, true);
		}

		return arr;
	}
	// 计数排序
	countingSort(arr) {
		var max = Math.max(...arr),
			min = Math.min(...arr),
			len = arr.length,
			i,
			bucket = [],
			result = [];

		// 入桶
		for (i = 0; i < len; i++) {
			var item = arr[i];
			bucket[item] = bucket[item] || 0;
			bucket[item]++;
		}

		// 出桶
		for (i = min; i <= max; i++) {
			var count = bucket[i];
			while (count > 0) {
				result.push(i);
				count--;
			}
		}

		return result;
	}
	// 桶排序
	bucketSort(arr, num) {
		var len = arr.length,
			max = Math.max(...arr),
			min = Math.min(...arr),
			result = [],
			bucket = [],
			space,
			i;
		// 计算桶的数量 至少2个桶
		num = num > 2 ? num : 2;
		// 计算每个桶的容量
		space = ((max - min) / num | 0) + 1;

		// 入桶
		for (i = 0; i < len; i++) {
			var item = arr[i];
			var index = (item - min) / space | 0;

			bucket[index] = bucket[index] || [];
			bucket[index].push(item);
			if (bucket[index].length > 1) {
				// insersort
				bucket[index] = this.insertion(bucket[index]);
			}
		}

		// 出桶
		for (i = 0; i < num; i++) {
			var list = bucket[i] || [];
			if (list.length > 0) {
				result = result.concat(list);
			}
		}

		return result;
	}
	// 基数排序 (LSD)
	radixSort(arr) {
		var len = arr.length,
			max = Math.max(...arr),
			bucket = [],
			result = [],
			i,
			j,
			k,
			hight = String(max).length;

		for (i = 1; i <= hight; i++) {
			result = [];
			bucket = [];
			// 入桶
			for (j = 0; j < len; j++) {
				var item = arr[j] + "";
				var index = item.length - i < 0 ? 0 : item.substr(item.length - i, 1);
				bucket[index] = bucket[index] || [];
				bucket[index].push(+item);
			}
			// 出桶
			for (k = 0; k < 10; k++) {
				if (bucket[k] && bucket[k].length > 0) {
					result = result.concat(bucket[k]);
				}
			}

			arr = result;
		}

		return result;
	}
}


var arr = [3, 36, 26, 27, 2, 46, 4, 19, 50];

let res = new Sort().radixSort(arr);
console.log(`排序结果：${res.toString()}`);
